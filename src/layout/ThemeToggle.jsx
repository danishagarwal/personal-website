export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <path
            fill="currentColor"
            d="M12 3.2a.8.8 0 0 1 .8.8v1.4a.8.8 0 0 1-1.6 0V4a.8.8 0 0 1 .8-.8Zm0 14.6a.8.8 0 0 1 .8.8V20a.8.8 0 0 1-1.6 0v-1.4a.8.8 0 0 1 .8-.8ZM4 11.2h1.4a.8.8 0 0 1 0 1.6H4a.8.8 0 0 1 0-1.6Zm14.6 0H20a.8.8 0 0 1 0 1.6h-1.4a.8.8 0 0 1 0-1.6ZM6.34 6.34a.8.8 0 0 1 1.13 0l.99.99a.8.8 0 1 1-1.13 1.13l-.99-.99a.8.8 0 0 1 0-1.13Zm9.07 9.07a.8.8 0 0 1 1.13 0l.99.99a.8.8 0 0 1-1.13 1.13l-.99-.99a.8.8 0 0 1 0-1.13ZM17.66 6.34a.8.8 0 0 1 0 1.13l-.99.99a.8.8 0 1 1-1.13-1.13l.99-.99a.8.8 0 0 1 1.13 0ZM8.46 15.41a.8.8 0 0 1 0 1.13l-.99.99A.8.8 0 1 1 6.34 16.4l.99-.99a.8.8 0 0 1 1.13 0Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M14.3 3.1a.7.7 0 0 1 .9.9 7.6 7.6 0 1 0 4.8 4.8.7.7 0 0 1 .9-.9A9.2 9.2 0 1 1 14.3 3.1Z"
          />
        </svg>
      )}
    </button>
  );
}
