import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Button = ({ label, type }) => (
  <button className={`btn-item ${type}`} type="button">
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
