export function readTheme() {
  try {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    /* ignore */
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  try {
    window.localStorage.setItem('theme', theme);
  } catch {
    /* ignore */
  }
}
