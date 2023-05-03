import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/pages/CalculatorPage.css';

function CalculatorPage() {
  return (
    <div className="calculator-page-container">
      <div className="calculator-description">
        <h1>Let&apos;s do some Maths!</h1>
        <p>
          Use this calculator to perform basic arithmetic operations such as
          addition, subtraction, multiplication, and division.
        </p>
      </div>
      <div className="calculator-container">
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
