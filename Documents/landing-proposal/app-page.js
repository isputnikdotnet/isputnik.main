// Screenshot strip: open a shot full size in the dialog.
const dialog = document.querySelector('#screenshot-dialog');
const expanded = document.querySelector('#expanded-image');
if (dialog && typeof dialog.showModal === 'function') {
  for (const shot of document.querySelectorAll('.shot')) {
    shot.addEventListener('click', () => {
      const img = shot.querySelector('img');
      expanded.src = shot.dataset.full;
      expanded.alt = img.alt;
      dialog.showModal();
    });
  }
  document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}
// Apps menu: close on Escape or a click elsewhere.
const menu = document.querySelector('.apps-menu');
if (menu) {
  document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });
}
