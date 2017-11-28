import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import AndroidToastModule from '../../native/android_toast_module'
export default class PersonalBox extends Component<{}> {
    img_source_id: number;

    constructor(props) {
        super(props);
        this.state = {
            onLine: false
        };
    }

    onLongPress() {
        console.log("你想按死我呀！");
        AndroidToastModule.showToast("你想按死我呀！");
    }

    onPress() {
        this.setState({
            onLine: !this.state.onLine,
        });
        console.log(this.props.name);
        AndroidToastModule.showToast(this.props.name);
    };

    render() {
        const img_sources = [
            require('../../static/img/icon_battery.png'),
            require('../../static/img/icon_video.png'),
            require('../../static/img/icon_led.png'),
            require('../../static/img/icon_tips.png'),
            require('../../static/img/icon_amusing.png'),
            require('../../static/img/icon_setting.png'),];

        return (
            <TouchableOpacity
                activeOpacity={0.7}//设置点击之后透明度
                onLongPress={this.onLongPress.bind(this)}
                onPress={this.onPress.bind(this)}
                style={[styles.componentContainer, {backgroundColor: this.props.bgColor}]}>
                <View style={[styles.componentContainer]}>
                    <Image style={[styles.img, {opacity: this.state.onLine ? 1 : 0.3}]}
                           source={img_sources[this.props.img_source_id]}
                    />
                    <Text style={[styles.text, {opacity: this.state.onLine ? 1 : 0.3}]}>
                        {this.props.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    componentContainer: {
        flex: 1,
        flexDirection: 'column',//确定子元素的方向
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 50,
        width: 50,
    },
    text: {
        fontSize: 12,
    }
});