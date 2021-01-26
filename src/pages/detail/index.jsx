import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components';
import Replies from '../../components/topicInfo/replies.jsx'
import TopicInfo from '../../components/topicInfo/topicInfo.jsx'
import ReplyContent from '../../components/topicInfo/replyContent.jsx'
import { getTopicInfo , admire, replyRequest } from '../../actions/topicInfo'

import { connect } from 'react-redux'
import './detail.less';

@connect(function ({ topicList, user }) {
    return { ...topicList, accesstoken: user.userMessage.accesstoken }
}, function (dispatch) {
    return {
        getTopicInfo(params) {
            dispatch(getTopicInfo(params))
        }
    }
})

class Detail extends Component {
    constructor() {
        super()
    }
    state = {
        showReplyContent: false,
        currentReply: null,
    }
    componentWillMount() {
        this.getDetail()
    }
    getDetail = () => {
        const id = getCurrentInstance().router.params.id
        const { accesstoken } = this.props
        this.props.getTopicInfo && this.props.getTopicInfo({ id, accesstoken })
    }
    adimreValue = (item) => {
        const reply_id = item.id
        const { accesstoken } = this.props
        admire({ reply_id, accesstoken }).then(res => {
            if (res.success) {
                this.getDetail()
            } else {
                Taro.showToast({ title: '点赞失败', icon: 'none' })
            }
        })
    }
    showReply = (item) => {
        this.setState({ showReplyContent: !this.state.showReplyContent, currentReply: item ? item : null })
    }
    cancelReply = () => {
        this.showReply()
    }
    replyOk = (content) => {
        const { accesstoken } = this.props
        const { currentReply } = this.state
        const reply_id = currentReply ? currentReply.id : null
        let preName = currentReply ? '@' + currentReply.author.loginname + '  ' : ''//评论人的昵称
        replyRequest({ accesstoken, content: preName + content, reply_id }).then(res => {
            if (res.success) {
                this.getDetail()
                this.showReply()
            } else {
                Taro.showToast({ title: '回复失败', icon: 'none' })
            }
        })
    }
    render() {
        const { topicInfo, replies } = this.props
        const { showReplyContent } = this.state
        return (
            <View className='detail'>
                {showReplyContent ? <ReplyContent onCancel={this.cancelReply} onReplyOk={this.replyOk}></ReplyContent> : null}
                <TopicInfo topicInfo={topicInfo} />
                <Replies replies={replies} onAdmire={this.adimreValue} onShowReply={this.showReply} />
                <Button className='replyBtn' onClick={this.showReply.bind(this, null)} >回复</Button>
            </View>
        )
    }
}

export default Detail