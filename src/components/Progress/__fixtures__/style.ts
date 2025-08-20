import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  progressContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  circleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 16,
  },
  circleItem: {
    alignItems: 'center',
    marginBottom: 16,
  },
  circleLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  lineProgressContainer: {
    marginBottom: 20,
  },
  customContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  customIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  animationControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 12,
  },
  percentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 50,
  },
  gradientDemo: {
    marginBottom: 16,
  },
  sizeDemo: {
    marginBottom: 20,
  },
  positionDemo: {
    marginBottom: 20,
  },
  formatDemo: {
    marginBottom: 20,
  },
});
