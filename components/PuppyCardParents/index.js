import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import { replaceRoute } from '../../actions/route';


import styles from './styles';

export default class PuppyCardParents extends Component {
    constructor(props) {
        super(props);
        this.icons = [
            require("../../../images/shape-1.png"),
        ];
    }
    renderIcon(i)
    {
        if(this.props.icon)
        {
            return(
                <View style={styles.icon_cont}>
                    <Image source={this.icons[i]} style={styles.icon} />
                </View>
            );
        }
    }
    render() {
        return(
            <View style={styles.parents_cont}>
                <View style={styles.parents}>{this.props.children}</View>
                {this.renderIcon(this.props.icon)}
            </View>
            );
    }
}
