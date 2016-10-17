import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  item_cont:{
    flexDirection: 'row',
    paddingRight: 15,
    paddingVertical: 10.5,
    borderBottomWidth: 0.5,
    borderColor: "#e5e5e5"
  },
  item_right:{
    flex:1,
  },
  fieldName:{
    color: "#939393",
    fontFamily: theme.sfuiDisplayRegular,
    fontSize: 13.5,
  },
  fieldValue:{
    color: "black",
    fontFamily: theme.sfuiDisplayRegular,
    fontSize: 13.5,
    textAlignVertical:"center"
  },
  item_images:{
    flexDirection: 'row',
    alignItems:"flex-end",
    position:"relative",
    //bottom:-4
  },
  item_image:{
    width: 29,
    height: 29,
    overflow: "hidden",
    borderRadius: theme.borderRadius,
    marginLeft: 7
  },
  item_icon:{
    alignItems:"flex-end",
    justifyContent: "center"
  },
  icon_image:{
    width: 12,
    height: 12,
  }
});
