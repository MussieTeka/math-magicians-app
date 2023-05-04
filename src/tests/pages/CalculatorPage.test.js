import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../../pages/CalculatorPage';

describe('CalculatorPage component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
