import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  parents_cont:{
    flexDirection: "row",
    // paddingRight: 30,
    position: "relative",
    borderBottomWidth: 0.5,
    borderColor: "#e5e5e5",
    marginBottom:0
  },
  parents:{
    flex:1
  },
  icon_cont:{
    alignItems: "flex-end",
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 15,
    right: 0,
  },
  icon:{
    width: 17,
    height: 20,
    position: "relative",
    top: -5
  }
});
