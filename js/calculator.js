// =============================================
// DESMOS GRAPHING CALCULATOR INTEGRATION
// =============================================

let desmosLoaded = false;
let desmosCalc = null;
const DESMOS_SCRIPT_URL = 'https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fae6';

/**
 * Dynamically load the Desmos script if not already loaded,
 * then initialize the calculator in #desmos-container.
 */
export function initCalculator() {
  const overlay = document.getElementById('calc-overlay');
  const closeBtn = document.getElementById('calcCloseBtn');
  const toggleBtn = document.getElementById('calcToggleBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('open');
    });
  }

  // Close on backdrop click
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleCalculator);
  }
}

/**
 * Load Desmos API script (once), then create the calculator instance.
 */
function loadDesmos() {
  return new Promise((resolve, reject) => {
    if (desmosLoaded && window.Desmos) {
      resolve();
      return;
    }
    if (document.getElementById('desmos-script')) {
      // Already loading, wait for it
      const check = setInterval(() => {
        if (window.Desmos) {
          clearInterval(check);
          desmosLoaded = true;
          resolve();
        }
      }, 100);
      return;
    }
    const script = document.createElement('script');
    script.id = 'desmos-script';
    script.src = DESMOS_SCRIPT_URL;
    script.onload = () => {
      desmosLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error('Failed to load Desmos API'));
    document.head.appendChild(script);
  });
}

/**
 * Toggle the calculator overlay open/closed.
 */
export function toggleCalculator() {
  const overlay = document.getElementById('calc-overlay');
  if (!overlay) return;

  const isOpen = overlay.classList.contains('open');
  if (isOpen) {
    overlay.classList.remove('open');
  } else {
    overlay.classList.add('open');
    // Initialize Desmos if not done yet
    if (!desmosCalc) {
      loadDesmos()
        .then(() => {
          const container = document.getElementById('desmos-container');
          if (container && window.Desmos && !desmosCalc) {
            desmosCalc = window.Desmos.GraphingCalculator(container, {
              keypad: true,
              expressions: true,
              settingsMenu: true,
              zoomButtons: true,
              lockViewport: false,
            });
          }
        })
        .catch((err) => {
          const container = document.getElementById('desmos-container');
          if (container) {
            container.innerHTML = `
              <div style="display:flex;align-items:center;justify-content:center;height:100%;
                          font-family:Nunito,sans-serif;color:#888;font-size:1rem;font-weight:700;
                          flex-direction:column;gap:12px;padding:40px;">
                <span style="font-size:2.5rem;">📊</span>
                <p>Could not load calculator.</p>
                <p style="font-size:0.85rem;">Please check your internet connection.</p>
              </div>`;
          }
          console.error(err);
        });
    }
  }
}
