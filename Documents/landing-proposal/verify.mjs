// Local browser review. Uses installed Chrome and Node's built-in WebSocket.
import { spawn } from 'node:child_process';
import { mkdtemp, writeFile, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
const executable = process.env.PROPOSAL_BROWSER || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
await access(executable);
const profile = await mkdtemp(join(tmpdir(), 'isputnik-proposal-'));
const browser = spawn(executable, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
let socket;
try {
  const endpoint = await new Promise((resolve, reject) => {
    let output = '';
    const timeout = setTimeout(() => reject(new Error('Browser launch timed out')), 20000);
    browser.on('error', reject);
    browser.stderr.on('data', data => {
      output += data;
      const match = output.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) { clearTimeout(timeout); resolve(match[1]); }
    });
  });
  socket = new WebSocket(endpoint);
  await new Promise((resolve, reject) => { socket.addEventListener('open', resolve); socket.addEventListener('error', reject); });
  let nextId = 0;
  const pending = new Map();
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (!pending.has(message.id)) return;
    const { resolve, reject, timer } = pending.get(message.id);
    clearTimeout(timer);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error))); else resolve(message.result);
  });
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++nextId;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`${method} timed out`)); }, 15000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const page = (method, params) => send(method, params, sessionId);
  const evaluate = async expression => {
    const result = await page('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  await page('Page.enable');
  await page('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await page('Page.navigate', { url: pathToFileURL(join(directory, 'index.html')).href });
  await evaluate(`new Promise(resolve => { if(document.readyState === 'complete') resolve(); else window.addEventListener('load', resolve, {once:true}); })`);
  await evaluate(`Promise.all([...document.images].filter(i=>i.getAttribute('src')).map(i=>i.decode()))`);
  const assets = await evaluate(`(async()=>{for(const button of document.querySelectorAll('[data-shot]')) {button.click(); await document.querySelector('#product-image').decode(); if(document.querySelectorAll('[aria-pressed="true"]').length!==1) throw Error('Selection failed');} document.querySelector('[data-shot]').click(); await document.querySelector('#product-image').decode(); document.querySelector('#expand').click(); if(!document.querySelector('dialog').open) throw Error('Dialog did not open'); document.querySelector('#close-dialog').click(); if(document.querySelector('dialog').open) throw Error('Dialog did not close'); return 'Six screenshots load; gallery selection and dialog pass';})()`);
  console.log(assets);
  for (const [name, width, height] of [['desktop',1440,1000],['mobile',390,844]]) {
    await page('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    await evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))');
    const dimensions = await evaluate('({width:innerWidth,scroll:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight})');
    if (dimensions.scroll > width) throw new Error(`Horizontal overflow at ${width}px: ${dimensions.scroll}`);
    const screenshot = await page('Page.captureScreenshot', { format:'png', captureBeyondViewport:true, clip:{ x:0,y:0,width,height:dimensions.height,scale:1 } });
    await writeFile(join(directory, `${name}.png`), Buffer.from(screenshot.data, 'base64'));
    console.log(`${name}: ${width} × ${dimensions.height}, no horizontal overflow`);
  }
  await page('Emulation.setDeviceMetricsOverride', { width:320,height:740,deviceScaleFactor:1,mobile:false });
  if (await evaluate('document.documentElement.scrollWidth > innerWidth')) throw new Error('Horizontal overflow at 320px');
  console.log('320px layout: no horizontal overflow');
  await send('Browser.close');
} finally {
  socket?.close();
  browser.kill();
}
