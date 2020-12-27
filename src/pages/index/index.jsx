import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import Menu from '../../components/menu/Menu'
// import { getTopicList } from '@/utils/request'
// import { getTopicList } from '../../utils/request'

import './index.less'
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount() {
    // getTopicList()
  }
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View>
          <Menu />
        </View>
      </View>
    )
  }
}

export default Index

