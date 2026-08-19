import { useEffect, useId, useState } from 'react';

export default function Rail({ profile, navItems, activeId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const media = window.matchMedia('(min-width: 801px)');
    const closeOnDesktop = () => {
      if (media.matches) {
        setMenuOpen(false);
      }
    };

    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <aside className={`rail${menuOpen ? ' is-open' : ''}`}>
      <div className="rail-bar">
        <h1 className="rail-name">
          {profile.firstName}{' '}
          <br />
          {profile.lastName}
        </h1>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? 'Close connect menu' : 'Open connect menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.3 6.3a1 1 0 0 1 1.4 0L12 10.58l4.3-4.28a1 1 0 1 1 1.4 1.42L13.42 12l4.28 4.3a1 1 0 0 1-1.42 1.4L12 13.42l-4.3 4.28a1 1 0 0 1-1.4-1.42L10.58 12 6.3 7.7a1 1 0 0 1 0-1.4Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4 7.25A.75.75 0 0 1 4.75 6.5h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 7.25Zm0 5A.75.75 0 0 1 4.75 11.5h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12.25Zm.75 4.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z"
              />
            </svg>
          )}
        </button>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
      <div className="rail-panel" id={panelId}>
        <p className="rail-role">{profile.role}</p>
        <nav className="rail-nav" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'is-active' : undefined}
              aria-current={activeId === item.id ? 'page' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="rail-footer">
          <p className="rail-footer-label">Connect</p>
          <a href={profile.resumeHref} download onClick={closeMenu}>
            Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} onClick={closeMenu}>
            Email
          </a>
        </div>
      </div>
    </aside>
  );
}
