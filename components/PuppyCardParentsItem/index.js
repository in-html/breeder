import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { replaceRoute } from '../../actions/route';


import styles from './styles';

export default class PuppyCardParentsItem extends Component {
    static propTypes = {
        replaceRoute: React.PropTypes.func
    }
    constructor(props) {
        super(props);
    }
    renderImage()
    {
        if(this.props.image)
        {
            return(
                <View style={styles.image_cont}>
                    <Image source={{uri: this.props.image}} style={styles.item_image} />
                </View>
            );
        }
    }
    renderTextCont()
    {
        let _styles = [];
        _styles.push(styles.text_cont);
        if(this.props.pos=="last")
            _styles.push(styles.borderBottomNone);

        return(
            <View style={_styles}>
                <View>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View>
                    <Text style={styles.desc}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
    render() {
        return(
            <TouchableHighlight onPress={() => this.replaceRoute(this.props.routName)} underlayColor={"#fff"}>
                <View style={styles.item} >
                    {this.renderImage(this.props.image)}
                    {this.renderTextCont()}
                </View>
            </TouchableHighlight>
        );
    }
}
function bindActions(dispatch) {
    return {
        replaceRoute: route => dispatch(replaceRoute(route))
    };
}