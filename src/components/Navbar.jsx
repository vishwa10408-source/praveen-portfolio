import { useState } from 'react';

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? 'open' : ''}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#home" className="brand" onClick={close}>
          PRAVEEN<span>/</span>SEC
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <MenuIcon open={open} />
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#about" onClick={close}>About</a>
          <a href="#skills" onClick={close}>Skills</a>
          <a href="#work" onClick={close}>Work</a>
          <a href="#method" onClick={close}>Method</a>
          <a href="#contact" className="nav-cta" onClick={close}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
