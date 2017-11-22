/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import PersonalBox from './components/personal_box';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <PersonalBox></PersonalBox>
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
