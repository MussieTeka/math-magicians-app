import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';

describe('Display Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Display value="test value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
