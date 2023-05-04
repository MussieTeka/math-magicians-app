import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../../components/Buttons';

describe('Buttons', () => {
  it('calls onClick with buttonName when a button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Buttons onClick={onClickMock} />);

    fireEvent.click(getByText('7'));
    expect(onClickMock).toHaveBeenCalledWith('7');

    fireEvent.click(getByText('+'));
    expect(onClickMock).toHaveBeenCalledWith('+');

    fireEvent.click(getByText('='));
    expect(onClickMock).toHaveBeenCalledWith('=');
  });
});
