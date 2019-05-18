import React from 'react';
import NavLink from './NavLink';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      {/* <img src={} alt="Ghassan Murad" /> */}
      <nav className={styles.nav}>
        <NavLink to="/projects" text="Projects" pattern="squares" />
        <NavLink to="/clients" text="Clients" pattern="triangles" />
        <NavLink to="/contact" text="Contact" pattern="circles" />
      </nav>
    </header>
  );
}

export default Header;
