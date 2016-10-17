import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight, Animated} from 'react-native';

import MenuButton from '../menuButton';
import styles from './styles';
import theme from '../../themes/base-theme';

export default class HeaderTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
        };
    }
    renderHeaderTitle()
    {
        if(this.props.title)
        {
            return(
                <View>
                    <Text style={[theme.header_text, styles.header_title]} numberOfLines={1}>{this.props.title}</Text>
                </View>
            );
        }

    }
    renderSubHeaderTitle()
    {
        if(this.props.subTitle)
        {
            return(
                <View>
                    <Text style={[theme.head_subTitle]} numberOfLines={1}>{this.props.subTitle}</Text>
                </View>
            );
        }
    }
    componentWillReceiveProps() {
        this.state.fadeAnim.setValue(0);
        Animated.timing(
            this.state.fadeAnim,
            {toValue: 1, duration:500}
        ).start();
    }
    render() {
        return (
            <Animated.View style={[theme.header_center, {opacity: this.state.fadeAnim}]}>
                {this.renderHeaderTitle()}
                {this.renderSubHeaderTitle()}
            </Animated.View>
        );
    }
}
