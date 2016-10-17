import React, { Component } from 'react';
import { AppRegistry, View, Image} from 'react-native';

import styles from './styles';

export default class AddNewLitterButton extends Component {
    render() {
        return(
            <View style={styles.footer_item_center}>
                <Image source={require('../../../images/icon-green-plus.png')} style={styles.image} />
            </View>
        );
    }
}
