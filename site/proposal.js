const productImage = document.querySelector('#product-image');
const caption = document.querySelector('#shot-caption');
const buttons = [...document.querySelectorAll('[data-shot]')];
for (const button of buttons) {
  button.addEventListener('click', () => {
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    productImage.src = `/Assets/screenshots/${button.dataset.shot}-1440.webp`;
    productImage.alt = button.dataset.alt;
    const heading = document.createElement('strong');
    heading.textContent = `${button.dataset.title}. `;
    caption.replaceChildren(heading, document.createTextNode(button.dataset.description));
  });
}
const dialog = document.querySelector('#screenshot-dialog');
const expand = document.querySelector('#expand');
if (typeof dialog.showModal === 'function') {
  expand.hidden = false;
  expand.addEventListener('click', () => {
    const expanded = document.querySelector('#expanded-image');
    expanded.src = productImage.src;
    expanded.alt = productImage.alt;
    dialog.showModal();
  });
  document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
}
for (const button of document.querySelectorAll('.copy-button')) {
  button.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy); button.textContent = 'Copied'; }
    catch { button.textContent = 'Select & copy'; }
    setTimeout(() => { button.textContent = 'Copy'; }, 1800);
  });
}
// How it works: a tab per step; arrow keys move between them.
const howTabs = [...document.querySelectorAll('[data-how]')];
if (howTabs.length) {
  const stage = document.querySelector('#how-panel');
  const install = stage.querySelector('.how-install');
  const shot = stage.querySelector('.how-shot');
  const choose = tab => {
    howTabs.forEach(t => { const on = t === tab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
    stage.setAttribute('aria-labelledby', tab.id);
    const isInstall = tab.dataset.how === 'install';
    install.hidden = !isInstall;
    shot.hidden = isInstall;
    if (!isInstall) { shot.src = `${tab.dataset.how}-1440.webp`; shot.alt = tab.dataset.alt; }
  };
  howTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => choose(tab));
    tab.addEventListener('keydown', event => {
      const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
      if (!step) return;
      event.preventDefault();
      const next = howTabs[(i + step + howTabs.length) % howTabs.length];
      choose(next); next.focus();
    });
  });
  // Warm the cache so switching steps doesn't flash.
  howTabs.filter(t => t.dataset.how !== 'install').forEach(t => { new Image().src = `${t.dataset.how}-1440.webp`; });
}
// Make it yours: a tab per theme; arrow keys move between them.
const themeTabs = [...document.querySelectorAll('[data-theme-shot]')];
if (themeTabs.length) {
  const image = document.querySelector('#theme-image');
  const choose = tab => {
    themeTabs.forEach(t => { const on = t === tab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
    image.src = `/Assets/screenshots/${tab.dataset.themeShot}-1440.webp`;
    image.alt = tab.dataset.alt;
  };
  themeTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => choose(tab));
    tab.addEventListener('keydown', event => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (!step) return;
      event.preventDefault();
      const next = themeTabs[(i + step + themeTabs.length) % themeTabs.length];
      choose(next); next.focus();
    });
  });
}
