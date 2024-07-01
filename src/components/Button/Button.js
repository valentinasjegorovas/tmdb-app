import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ href, children }) => {
  return (
    <a className="btn" href={href}>
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

export default Button;
