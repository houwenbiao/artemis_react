/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet, TouchableOpacity,
    View
} from 'react-native';
import Personal from './components/personal';

export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state={
              isOnLine : true,
        };
    }
    onClick(){
        this.state.isOnLine = ! this.state.isOnLine;
        console.log("isOnLine:" + this.state.isOnLine);
    };
    render() {
        return (
            <TouchableOpacity onPress={this.onClick()} style={styles.container}>
                <Personal status={false}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
});
