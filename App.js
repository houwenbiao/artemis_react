/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,View} from "react-native";
import Personal from "./components/personal";

export default class App extends Component<{}> {
    /*render() {
        let defaultName = 'PersonalPager';
        let defaultComponent = PersonalPager;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );
    }
}*/
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

