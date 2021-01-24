import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Textarea, Button } from '@tarojs/components';
import { connect } from 'react-redux'
import './replycontent.less';
class ReplyContent extends Component {
    state = {
        content: ''
    }
    Ok = () => {
        const { content } = this.state
        if (content.trim()) {
            this.props.onReplyOk && this.props.onReplyOk(content)
        } else {
            Taro.showToast({ title: '请输入回复内容', icon: 'none' })
        }
    }
    cancel = () => {
        this.props.onCancel && this.props.onCancel()
    }
    inputContent = (e) => {
        this.setState({ content: e.detail.value })
    }
    render() {
        return (
            <View className='replycontent'>
                <Textarea onInput={this.inputContent} className='replycontent-text' placeholder='请输入回复内容'></Textarea>
                <View className='replycontent-btngroup'>
                    <Button className='btn' onClick={this.Ok}>确定</Button>
                    <Button className='btn' onClick={this.cancel} >取消</Button>
                </View>
            </View>
        )
    }
}

export default ReplyContent