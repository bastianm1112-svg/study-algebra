// =============================================
// DESMOS GRAPHING CALCULATOR — iframe embed
// =============================================

export function initCalculator() {
  const overlay = document.getElementById('calc-overlay');
  const closeBtn = document.getElementById('calcCloseBtn');
  const toggleBtn = document.getElementById('calcToggleBtn');

  if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  if (toggleBtn) toggleBtn.addEventListener('click', toggleCalculator);
}

export function toggleCalculator() {
  const overlay = document.getElementById('calc-overlay');
  if (!overlay) return;

  if (overlay.classList.contains('open')) {
    overlay.classList.remove('open');
  } else {
    overlay.classList.add('open');
    const container = document.getElementById('desmos-container');
    // Inject iframe once
    if (container && !container.querySelector('iframe')) {
      container.innerHTML = `<iframe
        src="https://www.desmos.com/calculator"
        style="width:100%;height:100%;border:none;"
        allow="fullscreen"
        title="Desmos Graphing Calculator"
      ></iframe>`;
    }
  }
}
