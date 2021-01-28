import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components';
import { connect } from 'react-redux'
import Head from '../../components/Head/Head'
import Panel from '../../components/Panel/Panel'
import { getUserDetail } from '../../actions/user'
import './index.less'

@connect(function ({ user }) {
    return { ...user.userMessage }
}, function () {
    return {}
})

class User extends Component {
    state = {
        recent_topics: [],
        recent_replies: []
    }
    componentDidShow() {
        const { loginname } = this.props
        getUserDetail({ loginname }).then(res => {
            if (res.success) {
                this.setState({ recent_topics: res.data.recent_topics, recent_replies: res.data.recent_replies })
            }
        })
    }
    publish = () => {
        Taro.navigateTo({ url: '/pages/publish/index' })
    }
    render() {
        const { loginname, avatar_url } = this.props
        const { recent_topics, recent_replies } = this.state
        return (<View>
            <Head loginname={loginname} avatar_url={avatar_url} />
            <Panel listData={recent_topics} title='最近发布的话题' />
            <Panel listData={recent_replies} title='最近收到的回复' />
            <Button onClick={this.publish} className='publish_btn' >发布话题</Button>
        </View>)
    }
}

export default User