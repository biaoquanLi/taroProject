import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components';
import { connect } from 'react-redux'
import { getTopicList, getNextTopicList } from '../../actions/topicList'
import Topic from './Topic'
@connect(function ({ topicList, menu }) {
    return { ...topicList, tab: menu.currentCata.key }
}, function (dispatch) {
    return {
        getTopicList(params) {
            dispatch(getTopicList(params))
        },
        getNextTopicList(params) {
            dispatch(getNextTopicList(params))
        }
    }
})
class TopicList extends Component {
    componentDidMount() {
        this.getTopicList()
    }
    getTopicList() {
        const { page, limit, tab } = this.props
        this.props.getTopicList && this.props.getTopicList({ page, limit, tab })
    }
    scrollToLower = () => {
        console.log('触底了')
        const { page, limit, tab } = this.props
        this.props.getNextTopicList && this.props.getNextTopicList({ page: page + 1, limit, tab })
    }
    render() {
        const { topicList } = this.props
        return (
            <ScrollView style="height:650px;margin-top:50px;" scrollY={true} onScrollToLower={this.scrollToLower}>
                {topicList.map(item => <Topic key={item.id} item={item} />)}
            </ScrollView>
        )
    }
}

export default TopicList