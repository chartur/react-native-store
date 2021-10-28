import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, TEXT_COLOR} from '../../../theme';

const styleSheet = StyleSheet.create({
  title: {
    color: TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 25,
  },
  link: {
    color: PRIMARY_COLOR,
    fontSize: 15,
  },
});

export default styleSheet;
