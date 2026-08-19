export default function Rail({ profile, navItems, activeId }) {
  return (
    <aside className="rail">
      <div>
        <h1 className="rail-name">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className="rail-role">{profile.role}</p>
        <nav className="rail-nav" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'is-active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="rail-footer">
        <a href={profile.resumeHref} download>
          Resume
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </aside>
  );
}
