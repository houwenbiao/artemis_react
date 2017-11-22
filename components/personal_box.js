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
        return (
            <View style={styles.commentContainer}>
                <View style={[styles.item_row]}>
                    <View style={[styles.item_column, {backgroundColor:'#FFD4D4'}]}>
                        <View style={[styles.fill, {backgroundColor:'#FFD4D4'}]}/>
                        <Image style={styles.img}
                               source={require('../static/img/icon_battery.png')}
                        />
                        <Text style={styles.text}>信号好</Text>
                        <View style={[styles.fill, {backgroundColor:'#FFD4D4'}]}/>
                    </View>
                    <View style={[styles.item_column, {backgroundColor:'#FFB9B9'}]}>
                        <View style={[styles.fill, {backgroundColor:'#FFB9B9'}]}/>
                        <Image style={styles.img}
                               source={require('../static/img/icon_video.png')}
                        />
                        <Text style={styles.text}>亲子视频</Text>
                        <View style={[styles.fill, {backgroundColor:'#FFB9B9'}]}/>
                    </View>
                </View>
                <View style={styles.item_row}>
                    <View style={[styles.item_column, {backgroundColor:'#FF9595'}]}>
                        <View style={[styles.fill, {backgroundColor:'#FF9595'}]}/>
                        <Image style={styles.img}
                               source={require('../static/img/icon_led.png')}
                        />
                        <Text style={styles.text}>智能照明</Text>
                        <View style={[styles.fill, {backgroundColor:'#FF9595'}]}/>
                    </View>
                    <View style={[styles.item_column,{backgroundColor:'#FA8282'}]}>
                        <View style={[styles.fill, {backgroundColor:'#FA8282'}]}/>
                        <Image style={styles.img}
                               source={require('../static/img/icon_tips.png')}
                        />
                        <Text style={styles.text}>育儿百科</Text>
                        <View style={[styles.fill, {backgroundColor:'#FA8282'}]}/>
                    </View>
                </View>
                <View style={styles.item_row}>
                    <View style={[styles.item_column,{backgroundColor:'#DE7676'}]}>
                        <View style={[styles.fill, {backgroundColor:'#DE7676'}]}/>
                        <Image style={styles.img}
                               source={require('../static/img/icon_amusing.png')}
                        />
                        <Text style={styles.text}>小趣逗玩</Text>
                        <View style={[styles.fill, {backgroundColor:'#DE7676'}]}/>
                    </View>
                    <View style={[styles.item_column,{backgroundColor:'#DC5B5B'}]}>
                        <View style={[styles.fill, {backgroundColor:'#DC5B5B'}]}/>
                        <Image style={styles.img}
                               source={require('../static/img/icon_setting.png')}
                        />
                        <Text style={styles.text}>小趣设置</Text>
                        <View style={[styles.fill, {backgroundColor:'#DC5B5B'}]}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        flexDirection:'column',//确定子元素的方向
        justifyContent:'space-around',
        backgroundColor: '#68E8ED',
    },
    item_row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    item_column:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
    },
    img: {
        height: 40,
        width: 40,
    },
    text:{
        marginTop:5,
        fontSize:12,
        color:'#000',
    },
    fill:{
        flex:1,
    },
});