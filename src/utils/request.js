import Taro from '@tarojs/taro'
import apiObj from '../constants/api'
export function getJSON(url, data) {
    return Taro.request({
        url,
        data,
        method: 'GET'
    })
}
export function postJSON(url, data) {
    return Taro.request({
        url,
        data,
        method: 'POST'
    })
}
export async function getTopicList() {
    await getJSON(apiObj.getTopics)
}