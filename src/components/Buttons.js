import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ onClick }) {
  const handleClick = (buttonName) => {
    onClick(buttonName);
  };

  return (
    <div className="buttons">
      <button type="button" className="ac" onClick={() => handleClick('AC')}>
        AC
      </button>
      <button type="button" className="pm" onClick={() => handleClick('+/-')}>
        ±
      </button>
      <button
        type="button"
        className="percent"
        onClick={() => handleClick('%')}
      >
        %
      </button>
      <button
        type="button"
        className="operator"
        onClick={() => handleClick('÷')}
      >
        ÷
      </button>
      <button type="button" className="number" onClick={() => handleClick('7')}>
        7
      </button>
      <button type="button" className="number" onClick={() => handleClick('8')}>
        8
      </button>
      <button type="button" className="number" onClick={() => handleClick('9')}>
        9
      </button>
      <button
        type="button"
        className="operator"
        onClick={() => handleClick('x')}
      >
        ×
      </button>
      <button type="button" className="number" onClick={() => handleClick('4')}>
        4
      </button>
      <button type="button" className="number" onClick={() => handleClick('5')}>
        5
      </button>
      <button type="button" className="number" onClick={() => handleClick('6')}>
        6
      </button>
      <button
        type="button"
        className="operator"
        onClick={() => handleClick('-')}
      >
        −
      </button>
      <button type="button" className="number" onClick={() => handleClick('1')}>
        1
      </button>
      <button type="button" className="number" onClick={() => handleClick('2')}>
        2
      </button>
      <button type="button" className="number" onClick={() => handleClick('3')}>
        3
      </button>
      <button
        type="button"
        className="operator"
        onClick={() => handleClick('+')}
      >
        +
      </button>
      <button
        type="button"
        className="zero number"
        onClick={() => handleClick('0')}
      >
        0
      </button>
      <button type="button" className="number" onClick={() => handleClick('.')}>
        .
      </button>
      <button
        type="button"
        className="equal operator"
        onClick={() => handleClick('=')}
      >
        =
      </button>
    </div>
  );
}

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
