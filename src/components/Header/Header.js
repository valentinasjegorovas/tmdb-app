import React from 'react';
import { useState } from 'react';
import './Header.scss';

const links = [
  {
    title: 'Home',
    href: '#',
  },
  {
    title: 'Movies',
    href: '#',
  },
  {
    title: 'Tv',
    href: '#',
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header__content">
        <div className="logo">Movies</div>
        <button
          className={`header__content__hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`header__content__menu ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link, i) => (
            <li
              key={i}
              className="header__content__menu__link"
              onClick={closeMenu}
            >
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
