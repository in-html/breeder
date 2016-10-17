import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

export default class TopTabs extends Component {
    render() {
        return (
            <View style={styles.tabs_nav_cont}>
                <View style={[styles.tabs_nav]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
