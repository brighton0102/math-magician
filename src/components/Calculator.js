import './Calculator.css';
import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newState = calculate(calculatorState, buttonName);
    setCalculatorState(newState);
  };

  return (
    <section className="container">
      <div className="display">{calculatorState.next || calculatorState.total || '0'}</div>
      <div className="btn-grid">
        <Button label="AC" onClick={() => handleButtonClick('AC')} />
        <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
        <Button label="%" onClick={() => handleButtonClick('%')} />
        <Button label="÷" onClick={() => handleButtonClick('÷')} />
        <Button label="7" onClick={() => handleButtonClick('7')} />
        <Button label="8" onClick={() => handleButtonClick('8')} />
        <Button label="9" onClick={() => handleButtonClick('9')} />
        <Button label="x" onClick={() => handleButtonClick('x')} />
        <Button label="4" onClick={() => handleButtonClick('4')} />
        <Button label="5" onClick={() => handleButtonClick('5')} />
        <Button label="6" onClick={() => handleButtonClick('6')} />
        <Button label="-" onClick={() => handleButtonClick('-')} />
        <Button label="1" onClick={() => handleButtonClick('1')} />
        <Button label="2" onClick={() => handleButtonClick('2')} />
        <Button label="3" onClick={() => handleButtonClick('3')} />
        <Button label="+" onClick={() => handleButtonClick('+')} />
        <Button label="0" type="double" onClick={() => handleButtonClick('0')} />
        <Button label="." onClick={() => handleButtonClick('.')} />
        <Button label="=" type="equal" onClick={() => handleButtonClick('=')} />
      </div>
    </section>
  );
};

export default Calculator;
