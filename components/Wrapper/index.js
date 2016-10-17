import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.wrapper}>
                {this.props.children}
            </View>
        );
    }
}