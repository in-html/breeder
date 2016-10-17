import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

export default class PuppyCardMainInfoItem extends Component {
    constructor(props) {
        super(props);
        this.icons = [
            require("../../../images/bithdate.png"),
        ];
    }
    renderIcon(i)
    {
        if(this.props.icon)
        {
            return(
                <View style={styles.item_icon}>
                    <Image source={this.icons[i]} style={styles.icon_image} />
                </View>
            );
        }
    }
    renderImages(i)
    {
        if(this.props.itemImages)
        {
            let res = [];
            for (let key in i)
            {
                res.push(
                    <Image key={key} source={{uri: i[key]}} style={styles.item_image}/>
                );
            }
            return res;
        }
    }
    _getFieldNamewidth()
    {
        if(this.props.fieldNameWidth)
            return parseFloat(this.props.fieldNameWidth);
        else return 79
    }
    _renderFieldName()
    {
        if(this.props.fieldValue)
        {
            return(
                <View style={[styles.item_right,{justifyContent:"center"}]}>
                    <Text style={styles.fieldValue}>{this.props.fieldValue}</Text>
                </View>
            );
        }
    }
    render() {
        let getFieldNamewidth = this._getFieldNamewidth(),
            _rendIcon = this.renderIcon(this.props.icon),
            _rendImages = this.renderImages(this.props.itemImages);
        return (
            <View style={styles.item_cont}>
                <View style={[{width: getFieldNamewidth, justifyContent:"center"}]}>
                    <Text style={styles.fieldName}>{this.props.fieldName}</Text>
                </View>
                {this._renderFieldName()}
                 {_rendIcon}
                <View style={styles.item_images}>
                    {_rendImages}
                </View>
                {this.props.children}
            </View>
        );
    }
}
