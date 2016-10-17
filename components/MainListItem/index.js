import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { replaceRoute } from '../../actions/route';
import CheckBox from '../../components/CheckBox';

import styles from './styles';

class MainListItem extends Component {
    static propTypes = {
        replaceRoute: React.PropTypes.func
    }
    constructor(props) {
        super(props);
        this.icons = [
            require("../../../images/fwd.png"),
        ];
    }
    replaceRoute(route) {
        if(route)
            this.props.replaceRoute(route);
    }
    renderIcon(i)
    {
        if(this.props.icon)
        {
            return(
                <View style={styles.icon_cont}>
                    <Image source={this.icons[i]} style={styles.icon} />
                </View>
            );
        }
    }
    renderImage(i)
    {
        if(this.props.image)
        {
            return(
            <View style={styles.image_cont}>
                <Image source={{uri: i}} style={styles.item_image} />
            </View>
            );
        }
    }
    renderChildren()
    {
        if(this.props.children)
        {
            let _children = React.Children.toArray(this.props.children), res=[];
            for(let key in _children)
            {
                //console.log(_children[key].type==CheckBox);

                if(_children[key].type == CheckBox)
                {
                    res.push(
                        <View style={{justifyContent: 'center', paddingRight:29}}>
                            _children[key]
                        </View>
                    );
                }

                else{
                    res.push(
                        _children[key]
                    );
                }
            }
            return res;
        }
    }
    renderStars()
    {
        if(this.props.children)
        {
            let _children = React.Children.toArray(this.props.children), res=[];
            for(let key in _children)
            {
                if(_children[key].type == CheckBox)
                {
                    res.push(
                        <View key="{key}" style={{justifyContent: 'center', paddingRight:29}}>
                            {_children[key]}
                        </View>
                    );
                }
            }
            return res;
        }
    }
    render() {
        return(
            <TouchableHighlight onPress={() => this.replaceRoute(this.props.routName)} underlayColor={"#fff"}>
                <View style={styles.item}>
                    {this.renderStars()}
                    {this.renderImage(this.props.image)}
                    <View style={styles.text_cont}>
                        <View>
                            <Text numberOfLines={1} style={styles.list_title}>{this.props.title}</Text>
                        </View>
                        <View>
                            <Text style={[styles.desc]}>{this.props.text}</Text>
                        </View>
                    </View>
                    {this.renderIcon(this.props.icon)}
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
export default connect(null, bindActions)(MainListItem);