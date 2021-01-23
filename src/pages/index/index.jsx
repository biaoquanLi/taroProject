import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import Menu from '../../components/menu/Menu'
import TopicList from '../../components/topicList/TopicList'

import './index.less'
class Index extends Component {
  componentWillReceiveProps() {
  }
  componentDidMount() {
  }
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View>
          <Menu />
          <TopicList></TopicList>
        </View>
      </View>
    )
  }
}

export default Index

