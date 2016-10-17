import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  tab_bt:{
    height:29,
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.greenColor,
  },
  tab_bt_first:{
    borderRightWidth: 0,
    borderLeftWidth:0,
    borderBottomLeftRadius: theme.btTabBorderRaius,
    borderTopLeftRadius: theme.btTabBorderRaius,
  },
  tab_bt_center:{
    borderRightWidth: 0,
    borderLeftWidth:0,
  },
  tab_bt_last:{
    borderRightWidth: 0,
    borderLeftWidth:0,
    borderBottomRightRadius: theme.btTabBorderRaius,
    borderTopRightRadius: theme.btTabBorderRaius
  },
  tab_bt_active:{
    backgroundColor: theme.greenColor,
  },
  tab_bt_text:{
    color: theme.greenColor,
    fontFamily: theme.sfuiDisplayRegular,
    fontSize: 13.5,
    textAlign:"center"
  },
  tab_bt_text_active:{
    color: "#f8f8f8",
  }
});
