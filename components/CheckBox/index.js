import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';


import styles from './styles';

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
        this.icons = [
            require("../../../images/check.png"),
            require("../../../images/nofav.png"),
            require("../../../images/fav.png"),
        ];
    }
    _checked()
    {
        this.setState({
            checked: !this.state.checked
        });
    }
    _renderLabel()
    {
        let _label;
        if(this.props.label)
        {
            if(this.state.checked)
                _label = this.props.labelActive;
            else
                _label = this.props.label;

            return (
                <View style={{paddingLeft: 9 }}>
                    <Text style={{fontSize: 13.5, color: "black"}}>{_label}</Text>
                </View>

            )
        }
    }
    _renderIcon()
    {
        if(this.props.icon)
        {
            let _i = parseInt(this.props.icon),
            _w = parseInt(this.props.w),
            _h = parseInt(this.props.h),
            _icon;
            if(this.props.iconActive)
            {
                if(this.state.checked)
                    _i = parseInt(this.props.iconActive);
                return (
                    <Image source={this.icons[_i]} style={{width: _w, height: _h}} />
                );
            }
            else{
                if(this.state.checked)
                {
                    return (
                        <Image source={this.icons[_i]} style={{width: _w, height: _h}} />
                    );
                }
            }
        }
    }
    render() {
        let _w = parseInt(this.props.w);
        return (
            <TouchableHighlight onPress={this._checked.bind(this)} underlayColor={"#fff"} style={{/*{backgroundColor: "red"},*/ flex:1, justifyContent: "center"}}>
                <View style={{flexDirection: "row" }}>
                    <View style={{justifyContent: "center", width: _w }}>
                     {this._renderIcon()}
                    </View>
                    {this._renderLabel()}
                </View>
            </TouchableHighlight>
        );
    }
}
