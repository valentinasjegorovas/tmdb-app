import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, onClick, link }) => {
  if (link) {
    return (
      <Link onClick={onClick ? onClick : undefined} className="btn" to={link}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick ? onClick : undefined} className="btn">
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
