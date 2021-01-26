import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';
import { connect } from 'react-redux'
import './head.less'

class Head extends Component {
    render() {
        const {loginname,avatar_url} = this.props
        return (
            <View className='login-head'>
             <Image className='login-head-back' src={require('../../assets/img/loginBack.jpg')} />
             <Image className='login-head-head' src={avatar_url?avatar_url:require('../../assets/img/head.png')} />
             {loginname?<Text className='login-head-name'>{loginname}</Text>:null}
      </View>
        )
    }
}

export default Head