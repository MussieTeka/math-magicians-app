import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('navbar', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
