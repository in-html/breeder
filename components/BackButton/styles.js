import theme from '../../themes/base-styles';
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  back_bt:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  back_bt_img:{
    width:12,
    height:20
  },
  back_bt_txt:{
    paddingLeft: 10
  }
});
