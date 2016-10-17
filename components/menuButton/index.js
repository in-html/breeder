import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';
import theme from '../../themes/base-theme';

export default class MenuButton extends Component {
    render() {
        return (
            <TouchableHighlight style={[theme.cell_left]}>
                <Text style={[theme.header_text]}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}
