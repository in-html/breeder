import theme from '../../themes/base-styles';
const React = require('react-native');

const { StyleSheet } = React;
const fItemCenterW = 56;

module.exports = StyleSheet.create({
  footer_item_center:{
    width: 56,
    position:'absolute',
    bottom: 16,
    left:(theme.deviceWidth/2)-fItemCenterW/2,
  },
  image:{
    width: 56,
    height: 56
  }
});
