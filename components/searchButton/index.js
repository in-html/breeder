import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';
import theme from '../../themes/base-theme';

export default class SearchButton extends Component {
    render() {
        return (
            <View style={[theme.cell_right]}>
                <TouchableHighlight>
                    <Image source={require('../../../images/search_ico.png')} style={styles.search_ico} />
                </TouchableHighlight>
            </View>

        );
    }
}
