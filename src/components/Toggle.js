import React from 'react';
import '../css/toggle.css';

const Toggle = ({ label, checked, onChange }) => {
  return (
    <div className="container">
      {label}{' '}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          checked={checked}
          onChange={onChange}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default Toggle;
