import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';


import styles from './styles';

export default class PuppyCardGalleryMainInfo extends Component {
    constructor(props) {
        super(props);
        this.icons = [
            require("../../../images/info.png"),
            require("../../../images/markings.png"),
            require("../../../images/develop.png"),
        ];
    }
    renderIcon(i)
    {
        if(this.props.icon)
        {
            let w = parseFloat(this.props.w),
                h = parseFloat(this.props.h);
            return(
                <Image source={this.icons[i]} style={{width: w, height: h}} />
            );
        }
    }
    renderTitle(t)
    {
        if(this.props.title)
        {
            return(
                <View style={styles.main_title_cont}>
                    {this.renderIcon(this.props.icon)}
                    <Text style={styles.main_title}>{t}</Text>
                </View>
            );
        }
    }
    render() {
        return (
            <View style={styles.main_info}>
                {this.renderTitle(this.props.title)}
                {this.props.children}
            </View>
        );
    }
}
