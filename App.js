/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import PersonalPager from './pager/personal_pager'
const ArtemisApp = StackNavigator({
    Home:{screen: PersonalPager}
});
export default class App extends Component<{}> {
    render() {
        return <ArtemisApp/>;
    }
}
