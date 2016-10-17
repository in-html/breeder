import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  image_cont:{
    paddingRight:29,
  },
  cont_image:{
    width:58,
    height:58,
    borderRadius:10
  },
  item:{
    flexDirection: 'row',
    borderBottomWidth:1,
    borderColor:"#e5e5e5",
    paddingTop:13,
    paddingBottom:14,
    paddingRight: 30
  },
  text_cont:{
    flex: 1,
    flexDirection: 'column'
  },
  title:{
    color: "black",
    fontSize: 33,
    fontFamily: theme.sfuiDisplayRegular,
    padding:0,
    textAlignVertical: "top"
  },
  desc:{
    color: theme.greenColor,
    fontSize: 24,
    fontFamily: theme.sfuiDisplayRegular,
    padding:0
  },
  icon_cont:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});
