/**
 * Author: JackHou
 * Date: 2017/11/24.
 * Description: 陪伴界面
 */

import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

export default class CompanyPager extends Component<{}>{
    static navigationOptions = {
        tabBarLabel: '睡前陪伴',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../static/img/icon_4.png')}
                style={[styles.icon, {tintColor: tintColor}]}

            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>睡前陪伴界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    icon: {
        marginTop:1,
        width: 22,
        height: 22,
    },
});