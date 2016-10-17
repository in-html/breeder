import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  image_cont:{
  },
  item_image:{
    width: 29,
    height: 29,
    borderRadius: 5
  },
  item:{
    flexDirection: 'row',
    paddingTop: 6.5,
    paddingBottom: 6.5,
    paddingRight: 15,
    position: "relative",
  },
  text_cont:{
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderColor: "#e5e5e5",
    paddingLeft: 14.5
  },
  title:{
    color: "black",
    fontSize: 16.5,
    fontFamily: theme.sfuiDisplayRegular,
    padding:0,
    textAlignVertical: "top"
  },
  desc:{
    color: theme.greenColor,
    fontSize: 12,
    fontFamily: theme.sfuiDisplayRegular,
    padding:0
  },
  borderBottomNone:{
    borderBottomWidth: 0,

  }
});
