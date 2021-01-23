import api from '../constants/api'
import { getJSON } from '../utils/request'

export function getTopicList(params) {
    return async dispatch => {
        const result = await getJSON(api.getTopics, params)
        if (result && result.data) {
            dispatch({
                type: 'getTopicList',
                topicList: result.data.data
            })
        }

    }
}

export function getNextTopicList(params) {
    return async dispatch => {
        const result = await getJSON(api.getTopics, params)
        if (result && result.data) {
            dispatch({
                type: 'getNextTopicList',
                topicList: result.data.data,
                page: params.page
            })
        }

    }
}