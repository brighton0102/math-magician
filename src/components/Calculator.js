import './Calculator.css';
import React from 'react';
import Button from './Button'; // Import the Button component

const Calculator = () => (
  <section className="container">
    <div className="display">0</div>
    <div className="btn-grid">
      {/* Use the Button component for each button */}
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" />
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" />
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" />
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" />
      <Button label="0" type="double" />
      <Button label="." />
      <Button label="=" type="equal" />
    </div>
  </section>
);

export default Calculator;
