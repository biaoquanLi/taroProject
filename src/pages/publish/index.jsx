import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Input, Picker, Button, Textarea } from '@tarojs/components';
import { connect } from 'react-redux'
import { publishTopic, editTopic } from '../../actions/user'
import './index.less'
@connect(function ({ menu, user, topicList }) {
    return { cataData: menu.cataData, accesstoken: user.userMessage.accesstoken, topicInfo: topicList.topicInfo }
}, function () {
    return {}
})

class Publish extends Component {
    state = {
        title: '',
        selectCata: null,
        content: '',
        isEdit: false,
        topicInfo: {}
    }
    componentDidMount() {
        const isEdit = getCurrentInstance().router.params.edit == 1
        const { topicInfo } = this.props
        const { title, content, tab } = topicInfo
        this.setState({ isEdit, topicInfo, title, content, tab })
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
        const { title, selectCata, content, isEdit, topicInfo } = this.state
        const { accesstoken } = this.props
        if (title && selectCata && content) {
            if (isEdit) {
                editTopic({ title, tab: 'dev', content, accesstoken, topic_id: topicInfo.id }).then(res => {
                    if (res.success) {
                        Taro.showToast({ title: "编辑成功", icon: 'success' })
                        Taro.navigateBack()
                    } else {
                        Taro.showToast({ title: "发布失败", icon: 'none' })
                    }
                })
            } else {
                publishTopic({ title, tab: 'dev', content, accesstoken }).then(res => {
                    if (res.success) {
                        Taro.showToast({ title: "发布成功", icon: 'success' })
                        Taro.redirectTo({ url: '/pages/user/index' })
                    } else {
                        Taro.showToast({ title: "发布失败", icon: 'none' })
                    }
                })
            }

        } else {
            Taro.showToast({ title: '类型或标题或内容不能为空', icon: 'none' })
        }
    }
    render() {
        const { selectCata, isEdit, topicInfo } = this.state
        const { cataData } = this.props
        return (<View className='publish-topic'>
            <Input className='publish-topic-title' value={isEdit ? (topicInfo.title) : ''} onInput={this.titleChange} placeholder='请输入你要发布的标题' />
            <Textarea className='publish-topic-content' value={isEdit ? (topicInfo.content) : ''} onInput={this.contentChange} placeholder='请输入您要发布的内容' />
            <Picker onChange={this.changeCata} mode='selector' range={cataData} rangeKey='value'>
                <View className='publish-topic-cata'>{selectCata ? selectCata.value : '请选择'}</View>
            </Picker>
            <Button className='publish-topic-btn' onClick={this.submitTopic}>提交</Button>
        </View>)
    }
}

export default Publish