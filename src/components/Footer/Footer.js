import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

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

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        {links.map((item, index) => (
          <li key={index} className="footer__links__link">
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
