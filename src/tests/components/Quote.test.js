import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/Quote';

describe('Quote component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quote category="life" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
