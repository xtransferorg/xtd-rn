import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Rate from '../Rate';

describe('Rate', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Rate />);
    expect(getByTestId('rate')).toBeTruthy();
  });

  it('renders correct number of stars', () => {
    const { getAllByTestId } = render(<Rate count={5} />);
    expect(getAllByTestId(/start.*/)).toHaveLength(5);
  });

  it('handles star click correctly', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <Rate count={5} onChange={handleChange} />
    );
    const stars = getAllByTestId(/start.*/);
    fireEvent.press(stars[2]!);
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('handles allowClear correctly false', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <Rate defaultValue={3} allowClear={false} onChange={handleChange} />
    );
    const stars = getAllByTestId(/start.*/);
    fireEvent.press(stars[2]!);
    expect(handleChange).not.toHaveBeenCalled();
    fireEvent.press(stars[1]!);
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders correct number of stars when count is 3', () => {
    const { getAllByTestId } = render(<Rate count={3} />);
    expect(getAllByTestId(/start.*/)).toHaveLength(3);
  });

  it('renders correct number of stars when count is 7', () => {
    const { getAllByTestId } = render(<Rate count={7} />);
    expect(getAllByTestId(/start.*/)).toHaveLength(7);
  });
});
