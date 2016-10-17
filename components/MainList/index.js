import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight, Animated} from 'react-native';

import { replaceRoute } from '../../actions/route';


import styles from './styles';

export default class MainList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
        };
    }
    componentWillReceiveProps() {
        /*this.state.fadeAnim.setValue(0);
        Animated.timing(
            this.state.fadeAnim,
            {toValue: 1, duration:500}
        ).start();*/
    }
    render() {
        return(
            <View>
                {this.props.children}
            </View>
            );
    }
}
