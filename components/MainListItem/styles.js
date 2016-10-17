import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  image_cont:{
    paddingRight: 14.5,
  },
  item_image:{
    width: 29,
    height: 29,
    borderRadius: 5
  },
  item:{
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: "#e5e5e5",
    paddingVertical:7,
    paddingRight: 15
  },
  text_cont:{
    flex: 1,
    flexDirection: 'column',
    paddingRight: 7
  },
  list_title:{
    color: "black",
    fontSize: 16.5,
    fontFamily: theme.sfuiDisplayRegular,
    padding:0,
    textAlignVertical: "top",
  },
  desc:{
    color: theme.greenColor,
    fontSize: 12,
    fontFamily: theme.sfuiDisplayRegular,
    padding:0,
  },
  icon_cont:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon:{
    width: 9,
    height: 15,
  }
});
