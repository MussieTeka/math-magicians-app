import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <div className="calculator-container">
        <Calculator />
      </div>
      <div className="quote-container">
        <Quote category="happiness" />
      </div>
    </div>
  );
}

export default App;
