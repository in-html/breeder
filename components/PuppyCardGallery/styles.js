import theme from '../../themes/base-styles';

const React = require('react-native');

const { StyleSheet, Dimensions } = React;

module.exports = StyleSheet.create({
  gallery_cont:{

  },
  gallery_main_img:{
    height: 171,
    position:"relative",
    overflow: "hidden"
  },
  gallery_img:{
    height: 171
  },
  gallery_icon:{
    width: 20,
    height: 17,
    position:"absolute",
    right: 15,
    bottom: 10
  }
});
