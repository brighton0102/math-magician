import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Button = ({ label, type, onClick }) => (
  <button className={`btn-item ${type}`} type="button" onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, // 'type' is optional with a default value
  onClick: PropTypes.func.isRequired,
};

export default Button;
