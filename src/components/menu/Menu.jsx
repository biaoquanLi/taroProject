import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from 'react-redux'
import './menu.less'
class Menu extends Component {
    render() {
        return (
            <View className="topiclist-menu">
                <Image className="image left" src={require('../../assets/img/cata.png')} />
                <Text>全部</Text>
                <Image className="image right" src={require('../../assets/img/login.png')} />
            </View>
        )
    }
}

export default Menu