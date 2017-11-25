/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * ./:当前目录  ../上级目录  /根目录
 * @flow
 */

import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import PersonalPager from './pager/personal_pager'
import EasyPager from './pager/easy_pager'

const ArtemisApp = TabNavigator(
    {
        Personal: {
            screen: PersonalPager,
        },
        Easy: {
            screen: EasyPager,
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#00F000',
            inactiveTintColor:"#050505",
            showIcon: true,
            labelStyle:{
                fontSize:15,
            },
            tabStyle:{
                height:60,
            },
            indicatorStyle:{
                backgroundColor:'#F0F0F0'
            },
            style:{
                backgroundColor:'#F0F0F0'
            }
        },
    }
);
export default class App extends Component<{}> {
    render() {
        return <ArtemisApp/>;
    }
}
