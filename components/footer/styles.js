import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  footer:{
    position:'relative',
    backgroundColor: theme.grayBgColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15
  },
});
