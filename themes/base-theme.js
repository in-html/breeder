const React = require('react-native');

const { StyleSheet, Dimensions } = React;
import theme from './base-styles';

module.exports = StyleSheet.create({
  header_center:{
    flex: 1,
    paddingHorizontal: 10
  },
  cell_left:{
    alignItems: 'flex-start',
    justifyContent:"center",
  },
  cell_right:{
    minWidth: 43,
    alignItems: 'flex-end',
    justifyContent:"center",
  },
  header_text: {
    color: theme.greenColor,
    fontSize: 17,
    textAlign:'center'
  },
  head_subTitle:{
    color: theme.grayColor,
    fontFamily: theme.sfuiDisplayMedium,
    fontSize: 12,
    textAlign:'center'
  }
});
