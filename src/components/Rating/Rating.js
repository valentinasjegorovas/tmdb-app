import React from 'react';
import PropTypes from 'prop-types';
import './Rating.scss';

const Rating = ({ rating }) => {
  const fillWidth = `${rating * 10}%`;
  return (
    <div className="wrapper">
      <div className="rating">
        <div
          style={{
            width: fillWidth,
            backgroundColor: rating < 7 ? '#f28b82' : '#76b852',
          }}
          className="rating__fill"
        ></div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.any,
};
export default Rating;
