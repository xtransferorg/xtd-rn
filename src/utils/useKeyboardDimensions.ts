import { useState, useEffect } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface KeyboardDimensions {
  width: number;
  height: number;
}

const iOSPlatform = Platform.OS === 'ios';

const useKeyboardDimensions = () => {
  const insets = useSafeAreaInsets();

  const [dimensions, setDimensions] = useState<KeyboardDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleShow = (e: KeyboardEvent) => {
      const { width = 0, height = 0 } = e?.endCoordinates || {};

      if (width > 0 && height > 0) {
        setDimensions({
          width: width - insets.left - insets.right,
          height: height - insets.bottom,
        });
      }
    };

    const handleHide = () => setDimensions({ width: 0, height: 0 });

    const keyboardShowSub = Keyboard.addListener(
      iOSPlatform ? 'keyboardWillShow' : 'keyboardDidShow',
      handleShow
    );

    const keyboardHideSub = Keyboard.addListener(
      iOSPlatform ? 'keyboardWillHide' : 'keyboardDidHide',
      handleHide
    );

    return () => {
      keyboardShowSub.remove();
      keyboardHideSub.remove();
    };
  }, [insets]);

  return dimensions;
};

export default useKeyboardDimensions;
