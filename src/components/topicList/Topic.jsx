import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components';
import { connect } from 'react-redux'
import './topic.less'
// import { myTimeToLocal } from '../../utils/date'
class Topic extends Component {
    gotoDetail = () => {
        console.log(555, this.props.item.id)
        Taro.navigateTo({ url: '/pages/detail/index?id=' + this.props.item.id })
    }
    render() {
        const { author, top, title, reply_count, visit_count, create_at, tab, id } = this.props.item
        return (
            (<View className='topiclist-topic' onClick={this.gotoDetail} >
                <Image className='head-img' src={'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1610542142,718703573&fm=26&gp=0.jpg'} />
                <View className='right'>
                    <View className='topic-title'>
                        {top ? <Text className='topic-up'>置顶</Text> : (tab == 'share' ? <Text className='topic-up blue'>分享</Text> : <Text className='topic-up blue'>问答</Text>)}

                        <Text>{title}</Text>
                    </View>
                    <View className='topic-info'>
                        <Text>{author ? author.loginname : ''}</Text>
                        <Text>{reply_count + '/' + visit_count}</Text>
                        <Text>创建时间{create_at.substr(0, 10)}</Text>
                    </View>
                </View>
            </View>)
        )
    }
}

export default Topic