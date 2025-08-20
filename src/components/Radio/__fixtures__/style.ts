import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  section: {
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingBottom: 12,
    borderRadius: 4,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 12,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  customContainer: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  highlightText: {
    color: '#1890ff',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff4d4f',
  },
  successText: {
    color: '#52c41a',
  },
  infoBox: {
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#1890ff',
    marginVertical: 8,
  },
  warningBox: {
    backgroundColor: '#fff7e6',
    padding: 10,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#fa8c16',
    marginVertical: 8,
  },
});
