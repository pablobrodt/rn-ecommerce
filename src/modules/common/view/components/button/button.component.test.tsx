import { fireEvent, render } from '@testing-library/react-native';
import { Button } from './button.component';

describe('Button Component Tests', () => {
  it('should execute callback when is pressed', () => {
    const fakeOnPress = jest.fn();

    const { root } = render(<Button onPress={fakeOnPress} />);

    fireEvent(root, 'press');

    expect(fakeOnPress).toHaveBeenCalledTimes(1);
  });
});
