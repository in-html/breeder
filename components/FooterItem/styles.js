import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  footer_item:{
    flex:1,

  },
  footer_item_text:{
    color: "#939393",
    fontSize: 10 ,
    fontFamily: theme.sfuiDisplayRegular,
    paddingTop: 5.5,
  }
});
