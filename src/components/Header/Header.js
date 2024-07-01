import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Movies',
    link: '/movies',
  },
  {
    title: 'Tv',
    link: '/tv',
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
          {links.map((item, i) => (
            <li
              key={i}
              className="header__content__menu__link"
              onClick={closeMenu}
            >
              <NavLink
                activeStyle={{ color: '#76b852' }}
                exact={item.link === '/'}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
