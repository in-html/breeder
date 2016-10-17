import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.main_content}>
              {this.props.children}
            </View>
        );
    }
}
