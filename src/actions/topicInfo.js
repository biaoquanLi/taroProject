import api from '../constants/api'
import { getJSON, postJSON } from '../utils/request'

export function getTopicInfo(params) {
    return async dispatch => {
        const result = await getJSON(api.getTopicInfo + '/' + params.id, params)
        if (result && result.data) {
            let data = result.data.data
            dispatch({
                type: 'getTopicInfo',
                topicInfo: data,
                replies: data.replies
            })
        }

    }
}

export async function admire(params) { // 点赞
    const result = await postJSON(api.updateReply + '/' + params.reply_id + '/ups', params)
    if (result && result.data) {
        return result.data
    } else {
        console.warn('点赞失败')
    }
}

export async function replyRequest(params) { // 新建评论

    const result = await postJSON(api.replyTopic + params.reply_id + '/replies', params)
    if (result && result.data) {
        return result.data
    } else {
        console.warn('评论失败')
    }
}