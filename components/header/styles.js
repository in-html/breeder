import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  header:{
    paddingHorizontal: 7.5,
    paddingVertical: 9,
    flexDirection: 'row',
    backgroundColor: theme.grayBgColor
  }
});
