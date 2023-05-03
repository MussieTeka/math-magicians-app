// CalculatorPage.js
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import Buttons from './Buttons';
import '../styles/components/Calculator.css';

function CalculatorPage() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="calculator">
      <Display value={state.next || state.total || '0'} />
      <Buttons onClick={handleClick} />
    </div>
  );
}

export default CalculatorPage;
