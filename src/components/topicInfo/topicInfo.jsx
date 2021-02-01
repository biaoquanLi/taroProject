import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, Button, RichText } from '@tarojs/components';
import { connect } from 'react-redux'
import './topicInfo.less'
class TopicInfo extends Component {
    edit(topicInfo) {
        Taro.redirectTo({ url: '/pages/publish/index?edit=1' })
    }
    render() {
        const { topicInfo, canEditAndDel } = this.props
        console.log('topicInfo', topicInfo)
        return (
            <View className='topic-info'>
                <View className='topic-info-header'>
                    <View className='topic-info-header-title'>{topicInfo.top ? <Text className='topic-up'>置顶</Text> : (topicInfo.tab == 'share' ? <Text className='topic-up blue'>分享</Text> : <Text className='topic-up blue'>问答</Text>)}
                        <Text>{topicInfo.title}</Text></View>
                    <View className='topic-info-header-pie'>
                        <Text>{topicInfo.create_at ? topicInfo.create_at.substr(0, 10) : ''}</Text>
                        <Text>{topicInfo.author ? topicInfo.author.loginname : ''}</Text>
                        <Text>{topicInfo.visit_count + '次浏览'}</Text>
                    </View>
                    {canEditAndDel ? <View className='topic-info-header-img'>
                        <Image className='img' src={require('../../assets/img/del.png')} />
                        <Image className='img' onClick={this.edit.bind(this, topicInfo)} src={require('../../assets/img/edit.png')} />
                    </View> : null}
                </View>
                <View className='topic-info-body'>
                    <RichText nodes={topicInfo.content} />
                </View>
            </View>
        )
    }
}

export default TopicInfo