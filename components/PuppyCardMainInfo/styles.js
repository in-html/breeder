import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  main_info:{

  },
  main_title_cont:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 33.5,
    paddingLeft: 5,
    paddingBottom: 13
  },
  main_title:{
    flex:1,
    color: theme.greenColor,
    fontFamily: theme.sfuiDisplayRegular,
    fontSize: 16.5,
    paddingLeft: 20
  },
  main_title_image:{
    width: 20,
    height: 20
  }
});
