import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image, RichText } from '@tarojs/components';
import { connect } from 'react-redux'
import './replies.less'
const isweapp = process.env.TARO_ENV === 'weapp'
class Replies extends Component {
    admire(item) {
        this.props.onAdmire && this.props.onAdmire(item)
    }
    replyOk(item) {
        this.props.onShowReply && this.props.onShowReply(item)
    }
    render() {
        const { replies } = this.props
        return (
            <View className='topicinfo-replies' >{replies.map((item, index) => {
                return (<View key={item.id} className='topicinfo-repliy'>
                    <Image className='topicinfo-repliy-image' src={'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'} />
                    <View className='topicinfo-repliy-right'>
                        <View className='topicinfo-repliy-right-body'>
                            <View className='topicinfo-repliy-right-pie'>
                                <Text className='loginname'>{item.author ? item.author.loginname : ''}</Text>
                                <Text className='floor'>{(index + 1) + '楼'}</Text>
                                <Text className='time'>{item.create_at.substr(0, 10)}</Text>
                            </View>
                            <View className='topicinfo-repliy-right-content'>
                                {
                                    isweapp ? <RichText nodes={item.content} /> : <View dangerouslySetInnerHTML={{ __html: item.content }} ></View>
                                }
                            </View>
                        </View>
                        <View className='topicinfo-repliy-right-zan'>
                            <Image onClick={this.admire.bind(this, item)} className='topicinfo-repliy-image' src={item.is_uped ? require('../../assets/img/myzan.png') : require('../../assets/img/zan.png')} />
                            <Text>{item.ups.length}</Text>
                            <Image className='topicinfo-repliy-image' src={require('../../assets/img/zhuan.png')} onClick={this.replyOk.bind(this, item)} />
                        </View>
                    </View>
                </View>)
            })}</View>
        )
    }
}

export default Replies