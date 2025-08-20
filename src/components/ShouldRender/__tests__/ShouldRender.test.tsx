import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import ShouldRender from '../ShouldRender';

describe('ShouldRender', () => {
  it('should render children when condition is true', () => {
    const { getByText } = render(
      <ShouldRender condition={true}>
        <Text>Hello World</Text>
      </ShouldRender>
    );
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('should not render children when condition is false', () => {
    const { queryByText } = render(
      <ShouldRender condition={false}>
        <Text>Hello World</Text>
      </ShouldRender>
    );
    expect(queryByText('Hello World')).toBeNull();
  });
});
