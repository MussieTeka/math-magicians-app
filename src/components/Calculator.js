import React, { useState } from 'react';

import Display from './Display';
import Buttons from './Buttons';

import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
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

export default Calculator;
