import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

export default class PuppyCard extends Component {
    render() {
        return (
            <View style={styles.gallery_cont}>
                <TouchableHighlight>
                    <View style={styles.gallery_main_img}>
                        <Image style={[styles.gallery_img]}
                               source={{uri: "http://antongerasimov.com/demo/breeder/layer-22.jpg"}}
                               ImageResizeMode="cover"
                        />
                        <Image style={styles.gallery_icon} source={require('../../../images/gallery-white.png')} />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
