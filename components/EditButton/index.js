import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';
import theme from '../../themes/base-theme';

export default class EditButton extends Component {
    render() {
        return (
            <View style={[theme.cell_right, styles.edit_bt_cont]}>
                <TouchableHighlight>
                    <View style={theme.cell_right}>
                        <Image style={styles.edit_bt_img} source={require('../../../images/edit.png')} />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
