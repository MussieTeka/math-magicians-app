import React from 'react';
import './Calculator.css';
import Buttons from './Buttons';
import Display from './Display';

function Calculator() {
  return (
    <div className="calculator">
      <Display />
      <Buttons />
    </div>
  );
}

export default Calculator;
