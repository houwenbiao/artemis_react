import React, {Component} from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import PersonalBox from './personal_box';

export default class Personal extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <PersonalBox
                        opacitys={1}//设置透明度
                        bgColor={'#FFD4D4'}
                        img_source={0}
                        name={'信号好'}>
                    </PersonalBox>
                    <PersonalBox
                        opacitys={this.props.status ? 1 : 0.3}
                        bgColor={'#FFB9B9'}
                        img_source={1}
                        name={'亲子视频'}>
                    </PersonalBox>
                </View>
                <View style={styles.row}>
                    <PersonalBox
                        opacitys={this.props.status ? 1 : 0.3}
                        bgColor={'#FF9595'}
                        img_source={2}
                        name={'智能照明'}>
                    </PersonalBox>
                    <PersonalBox
                        opacitys={1}
                        bgColor={'#FA8282'}
                        img_source={3}
                        name={'育儿百科'}>
                    </PersonalBox>
                </View>
                <View style={styles.row}>
                    <PersonalBox
                        opacitys={this.props.status ? 1 : 0.3}
                        bgColor={'#DE7676'}
                        img_source={4}
                        name={'小趣逗玩'}>
                    </PersonalBox>
                    <PersonalBox
                        opacitys={1}
                        bgColor={'#DC5B5B'}
                        img_source={5}
                        name={'小趣设置'}>
                    </PersonalBox>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});