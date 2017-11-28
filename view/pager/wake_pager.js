/**
 * Author: JackHou
 * Date: 2017/11/24.
 * Description: Wake界面
 */

import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

export default class WakePager extends Component<{}>{
    static navigationOptions = {
        tabBarLabel: '睡眠看护',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../static/img/icon_3.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>睡眠看护界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    icon: {
        width: 22,
        height: 22,
    },
});