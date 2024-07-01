import React from 'react';
import PropTypes from 'prop-types';
import './RatingCircle.scss';

const RatingCircle = ({ rating }) => {
  const circumference = 2 * Math.PI * 25;
  const offset = circumference - (rating / 10) * circumference;
  const fillColor = rating < 7 ? '#f28b82' : '#76b852';

  return (
    <div className="rating-wrapper">
      <svg className="rating-circle" width="50" height="50" viewBox="0 0 60 60">
        <circle
          className="rating-circle-bg"
          cx="30"
          cy="30"
          r="25"
          stroke="#fff"
          strokeWidth="5"
          fill="none"
        />
        <circle
          className="rating-circle-fill"
          cx="30"
          cy="30"
          r="25"
          stroke={fillColor}
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="rating-text">{rating.toFixed(1)}</div>
    </div>
  );
};

RatingCircle.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingCircle;
