import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    width: 70,
    height: 38,
    borderRadius: 4,
  },
  btn: {
    alignItems: 'center',
    borderRadius: 96,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  preBtn: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#838099',
  },
  nextBtn: {
    backgroundColor: '#F56A00',
    marginLeft: 8,
  },
  btnText: {
    fontSize: 14,
    color: '#181721',
    lineHeight: 22,
    fontWeight: '500',
  },
  btnNextText: {
    color: '#FFF',
  },
  description: {
    color: '#181721',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  topImg: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -90,
    right: 16,
    backgroundColor: 'pink',
    borderRadius: 16,
    transform: [
      {
        rotateZ: '18deg',
      },
    ],
  },
});
