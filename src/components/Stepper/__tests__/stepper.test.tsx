import { act, fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Stepper from '..';

describe('Stepper', () => {
  it('should use defaultValue', async () => {
    const stepper = render(<Stepper defaultValue={2.3} />);
    const input = stepper.root.findByProps({ testID: 'stepper-input' });
    expect(input.props.value).toBe('2.3');
  });

  it('should limit value with min/max props', () => {
    const stepper = render(<Stepper min={3} max={8} defaultValue={2} />);
    const input = stepper.root.findByProps({ testID: 'stepper-input' });

    expect(input.props.value).toBe('3');
  });

  it('should format value based on digits prop', () => {
    const stepper = render(<Stepper digits={1} defaultValue={2.36} />);
    const input = stepper.root.findByProps({ testID: 'stepper-input' });

    expect(input.props.value).toBe('2.4');
  });

  it('should increase value when click suffix button', async () => {
    const { getByTestId } = render(<Stepper defaultValue={5} />);
    const plusBtn = getByTestId('suffix-button');

    await act(() => {
      return fireEvent.press(plusBtn);
    });

    const input = getByTestId('stepper-input');
    expect(input.props.value).toBe('6');
  });

  it('should limit value not higher than max prop', async () => {
    const { getByTestId } = render(<Stepper max={10} defaultValue={10} />);
    const plusBtn = getByTestId('suffix-button');

    await act(() => {
      return fireEvent.press(plusBtn);
    });

    const input = getByTestId('stepper-input');
    expect(input.props.value).toBe('10');
  });

  it('should invoke onChange callback when value changed', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Stepper onChange={onChange} defaultValue={5} />
    );

    await act(() => {
      return fireEvent.press(getByTestId('suffix-button'));
    });

    expect(onChange).toHaveBeenCalledWith(6);
  });

  it('should allow empty string value when allowEmpty', async () => {
    const { getByTestId } = render(<Stepper allowEmpty />);

    const input = getByTestId('stepper-input');
    await act(() => {
      return fireEvent.changeText(input, '');
    });

    expect(input.props.value).toBe('');
  });

  it('should correct value when input out of range on blur', async () => {
    const { getByTestId } = render(<Stepper max={10} />);

    const input = getByTestId('stepper-input');
    await act(() => {
      return fireEvent.changeText(input, '15');
    });
    await act(() => {
      return fireEvent(input, 'blur');
    });

    expect(input.props.value).toBe('10');
  });

  it('should increase by step prop when click prefix btn', async () => {
    const { getByTestId } = render(<Stepper step={3} defaultValue={2} />);

    await act(() => {
      return fireEvent.press(getByTestId('suffix-button'));
    });

    const input = getByTestId('stepper-input');
    expect(input.props.value).toBe('5');
  });

  it('should invoke focus callback', () => {
    const onFocus = jest.fn();
    const { getByTestId } = render(<Stepper onFocus={onFocus} />);

    fireEvent(getByTestId('stepper-input'), 'focus');

    expect(onFocus).toHaveBeenCalled();
  });

  it('should trim extra decimal places based on digits prop', () => {
    const { getByTestId } = render(<Stepper digits={2} defaultValue={2.466} />);

    const input = getByTestId('stepper-input');
    expect(input.props.value).toBe('2.47');
  });

  it('should format to integer when digits=0', () => {
    const { getByTestId } = render(<Stepper digits={0} defaultValue={2.1} />);

    const input = getByTestId('stepper-input');
    expect(input.props.value).toBe('2');
  });

  it('should disable all buttons when inputReadOnly', () => {
    const { getByTestId } = render(<Stepper disableMinus disablePlus />);

    expect(
      getByTestId('suffix-button').props.accessibilityState.disabled
    ).toBeTruthy();
    expect(
      getByTestId('prefix-button').props.accessibilityState.disabled
    ).toBeTruthy();
  });
});
