import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, Text, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { replaceRoute } from '../../actions/route';
import styles from './styles';
import theme from '../../themes/base-theme';


class BackButton extends Component {
    static propTypes = {
        replaceRoute: React.PropTypes.func
    }
    constructor(props) {
        super(props);
    };
    replaceRoute(route) {
        this.props.replaceRoute(route);
    }
    render() {
        return (
            <View style={theme.cell_left}>
                <TouchableHighlight onPress={() => this.replaceRoute('Main')} underlayColor={"#f8f8f8"}>
                    <View style={[styles.back_bt]}>
                        <Image style={styles.back_bt_img} source={require('../../../images/back.png')} />
                        <Text style={[styles.back_bt_txt, theme.header_text]}>{this.props.text}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
function bindActions(dispatch) {
    return {
        replaceRoute: route => dispatch(replaceRoute(route))
    };
}
export default connect(null, bindActions)(BackButton);

