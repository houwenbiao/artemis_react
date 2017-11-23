import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class PersonalBox extends Component<{}> {
    render() {
        const img_sources = [
            require('../static/img/icon_battery.png'),
            require('../static/img/icon_video.png'),
            require('../static/img/icon_led.png'),
            require('../static/img/icon_tips.png'),
            require('../static/img/icon_amusing.png'),
            require('../static/img/icon_setting.png'),];
        return (
            <View style={[styles.componentContainer,
                {backgroundColor:this.props.bgColor}]}>
                <Image style={[styles.img, {opacity:this.props.opacitys}]}
                       source={img_sources[this.props.img_source]}
                />
                <Text style={[styles.text, {opacity:this.props.opacitys}]}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    componentContainer: {
        flex: 1,
        flexDirection: 'column',//确定子元素的方向
        justifyContent: 'center',
        alignItems:'center'
    },
    img:{
        height:50,
        width:50,
    },
    text:{
        fontSize:12,
    }
});