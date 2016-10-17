import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

export default class FooterItem extends Component {
    constructor(props) {
        super(props);
        this.icons = [
            require("../../../images/gallery.png"),
            require("../../../images/calendar.png"),
            require("../../../images/sell.png"),
            require("../../../images/invoice.png"),
            require("../../../images/camera.png")
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
    renderEventIcon()
    {
        if(this.props.eventIcon)
        {
            return(
                <View style={
                    {
                        width: 12,
                        height: 12,
                        backgroundColor: "#ff2d55",
                        borderRadius: 50,
                        position: "absolute",
                        top: -4,
                        right: 40
                    }
                }>
                </View>
            );
        }
    }
    renderItem()
    {
        let s = [];
        if(this.props.pos=="first")
            s.push({left:-20});

        else if(this.props.pos=="last")
            s.push({right:-20});

        return(
            <View style={[s]}>
                    <View style={{alignItems: 'center'}}>
                        {this.renderIcon(this.props.icon)}
                        {this.renderEventIcon(this.props.eventIcon)}
                        <Text style={styles.footer_item_text}>{this.props.fText}</Text>
                    </View>
            </View>
        );

    }
    render() {
        return(
            <View style={styles.footer_item}>
                {this.renderItem()}
            </View>
        );
    }
}
