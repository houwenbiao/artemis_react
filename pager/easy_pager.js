/**
 * Author: JackHou
 * Date: 2017/11/24.
 * Description:
 */

import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class PersonalPager extends Component<{}>{
    static navigationOptions = {
        tabBarLabel: 'E·A·S·Y',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/img/icon_1.png')}
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
        backgroundColor: '#05F5F5',
    },
});