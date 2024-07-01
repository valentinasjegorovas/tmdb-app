import React from 'react';
import './Footer.scss';

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

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        {links.map((item, index) => (
          <li key={index} className="footer__links__link">
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
