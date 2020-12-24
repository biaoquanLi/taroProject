import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
// import { getTopicList } from '@/utils/request.js'
import { getTopicList } from '../../utils/request'

import './index.less'
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount() {
    getTopicList()
  }
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View><Text>Hello, World11</Text></View>
      </View>
    )
  }
}

export default Index

