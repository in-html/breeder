import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';
import theme from '../../themes/base-styles';

export default class TopTabsButton extends Component {
    constructor(props) {
        super(props);
    }
    _getStyleBt()
    {
        let sBt = [];
        sBt.push(styles.tab_bt);

        if(this.props.isActive){
            sBt.push(styles.tab_bt_active);
        }
        if(this.props.pos == "first")
        {
            sBt.push(styles.tab_bt_first);
        }
        else if(this.props.pos == "last")
        {
            sBt.push(styles.tab_bt_last);
        }
        else if(this.props.pos == "center")
        {
            sBt.push(styles.tab_bt_center);
        }

        return sBt;
    }
    _getStyleText()
    {
        let txtBt = [];

        txtBt.push(styles.tab_bt_text);

        if(this.props.isActive)
            txtBt.push(styles.tab_bt_text_active);

        return txtBt;
    }
    _onPress(){
        if(this.props.onPress){
            this.props.onPress();
        }
    }
    _getUnderlayColor(){
        if(this.props.isActive)
            return theme.greenColor;
        else
            return "transparent";
    }
    render() {
        return (
            <TouchableHighlight
                onPress={this._onPress.bind(this)}
                style={this._getStyleBt()}
                underlayColor={this._getUnderlayColor()}>
                <View>
                    <Text style={[this._getStyleText()]}>{this.props.children}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}