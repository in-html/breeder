import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps()
    {
        this.refs.scrollView.scrollTo({y:0, x:0});
    }
    render() {
        return (
            <ScrollView ref="scrollView">
                {this.props.children}
            </ScrollView>
        );
    }
}
