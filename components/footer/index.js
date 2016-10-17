import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

export default class Footer extends Component {
    render() {
        return(
            <View style={styles.footer}>
                {this.props.children}
            </View>
        );
    }
}
