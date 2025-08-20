import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  innerContainer: {
    marginHorizontal: 50,
    backgroundColor: '#fff',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export const getStarWidth = () => (screenWidth - 32) / 7;
export const iconSize = 32;
