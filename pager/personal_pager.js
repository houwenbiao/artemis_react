/**
 * Author: JackHou
 * Date: 2017/11/24.
 * Description:
 */

import React, {Component} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import Personal from "../components/personal";

export default class PersonalPager extends Component<{}> {
    static navigationOptions = {
        tabBarLabel: '趣多多',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/img/icon_2.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View style={styles.container}>
                <Personal/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
});