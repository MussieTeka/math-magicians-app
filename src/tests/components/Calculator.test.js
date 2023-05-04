import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../../components/Calculator';

describe('CalculatorPage', () => {
  it('should render correctly', () => {
    const component = renderer.create(<CalculatorPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
