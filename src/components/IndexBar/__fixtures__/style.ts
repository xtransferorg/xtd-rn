import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footerStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  btn: {
    width: '48%',
  },
  customLine: {
    backgroundColor: '#E8E8E8',
    height: 1,
  },
  customContainer: {
    backgroundColor: '#F8F9FA',
  },
  customTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  customDescription: {
    fontSize: 12,
    color: '#7F8C8D',
    fontStyle: 'italic',
  },
  customSideBar: {
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  customValueStyle: {
    backgroundColor: '#EBF3FD',
    borderRadius: 8,
    padding: 12,
  },
  customEmpty: {
    paddingVertical: 60,
  },
  splitFooter: {
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
});
