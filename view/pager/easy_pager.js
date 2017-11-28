/**
 * Author: JackHou
 * Date: 2017/11/24.
 * Description: Easy界面
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class EasyPager extends Component<{}>{
    static navigationOptions = {
        tabBarLabel: 'E·A·S·Y',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../static/img/icon_2.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Easy界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    icon: {
        marginTop:3,
        width: 22,
        height: 22,
    },
});