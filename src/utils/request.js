import Taro from '@tarojs/taro'
import apiObj from '../constants/api'
export function getJSON(url, data) {
    Taro.showLoading({ title: '加载中' })
    return Taro.request({
        url,
        data,
        method: 'GET',
        complete: () => {
            Taro.hideLoading()
        }
    })
}
export function postJSON(url, data) {
    Taro.showLoading({ title: '加载中' })
    return Taro.request({
        url,
        data,
        method: 'POST',
        complete: () => {
            Taro.hideLoading()
        }
    })
}
export async function getTopicList() {
    await getJSON(apiObj.getTopics)
}