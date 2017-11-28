/**
 * Author: JackHou
 * Date: 2017/11/24.
 * Description: ./当前目录  ../上级目录  /根目录
 */

import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import PersonalPager from './view/pager/personal_pager'
import EasyPager from './view/pager/easy_pager'
import CompanyPager from './view/pager/company_pager'
import WakePager from './view/pager/wake_pager'
const ArtemisApp = TabNavigator(
    {
        Personal: {
            screen: PersonalPager,
        },
        Company:{
            screen:CompanyPager,
        },
        Wake:{
            screen:WakePager,
        },
        Easy: {
            screen: EasyPager,
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#DC5B5B',//选中页面bar的颜色
            inactiveTintColor:"#050505",//未选中页面bar的颜色
            showIcon: true,//是否显示bar的图片
            labelStyle:{//bar的标题
                padding:0,
                margin:0,
                fontSize:13,
            },
            tabStyle:{
                height:45,
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
