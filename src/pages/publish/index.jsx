import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, Picker, Button, Textarea } from '@tarojs/components';
import { connect } from 'react-redux'
import { publishTopic } from '../../actions/user'
import './index.less'
@connect(function ({ menu, user }) {
    return { cataData: menu.cataData, accesstoken: user.userMessage.accesstoken }
}, function () {
    return {}
})

class Publish extends Component {
    state = {
        title: '',
        selectCata: null,
        content: ''
    }
    titleChange = (e) => {
        this.setState({ title: e.detail.value })
    }
    contentChange = (e) => {
        this.setState({ content: e.detail.value })
    }
    changeCata = (e) => {
        const { cataData } = this.props
        this.setState({ selectCata: cataData[e.detail.value] })
    }
    submitTopic = (e) => {
        const { title, selectCata, content } = this.state
        const { accesstoken } = this.props
        if (title && selectCata && content) {
            publishTopic({ title, tab: 'dev', content, accesstoken }).then(res => {
                if (res.success) {
                    Taro.showToast({ title: "发布成功", icon: 'success' })
                    Taro.redirectTo({ url: '/pages/user/index' })
                } else {
                    Taro.showToast({ title: "发布失败", icon: 'none' })
                }
            })
        } else {
            Taro.showToast({ title: '类型或标题或内容不能为空', icon: 'none' })
        }
    }
    render() {
        const { selectCata } = this.state
        const { cataData } = this.props
        return (<View className='publish-topic'>
            <Input className='publish-topic-title' onInput={this.titleChange} placeholder='请输入你要发布的标题' />
            <Textarea className='publish-topic-content' onInput={this.contentChange} placeholder='请输入您要发布的内容' />
            <Picker onChange={this.changeCata} mode='selector' range={cataData} rangeKey='value'>
                <View className='publish-topic-cata'>{selectCata ? selectCata.value : '请选择'}</View>
            </Picker>
            <Button className='publish-topic-btn' onClick={this.submitTopic}>提交</Button>
        </View>)
    }
}

export default Publish