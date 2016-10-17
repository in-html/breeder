import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  tabs_nav_cont:{
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: theme.grayBgColor,
    //position: "relative",
    //top: -22.5
  },
  tabs_nav: {

    flexDirection: 'row'
  }
});
