import {StyleSheet} from 'react-native';
import {CARD_COLOR, PRIMARY_COLOR} from '../../../theme';

const styleSheet = StyleSheet.create({
  productCard: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: CARD_COLOR,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'rgba(170, 182, 211, 0.1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    elevation: 1,
  },
  productFavoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 30,
    height: 30,
    borderRadius: 35,
    zIndex: 100,
    backgroundColor: CARD_COLOR,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productFavoriteIcon: {
    color: PRIMARY_COLOR,
  },
  productImage: {
    width: '100%',
    height: 150,
  },
});

export default styleSheet;
