import React from 'react';
import './ButtonAndStats.scss';
import PropTypes from 'prop-types';

const StatsButton = ({ title, onClick, value, src }) => (
  <div className="StatsButton__Container">
    <button onClick={onClick}>
      <img src={src} width="20" height="20" alt="stats-img" />
    </button>
    <div>{title}</div>
    <div>
      {value}%
      <span>&#x2191;</span>
    </div>
  </div>
);

StatsButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
  src: PropTypes.string,
}

export default StatsButton;