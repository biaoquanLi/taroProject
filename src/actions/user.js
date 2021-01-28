import api from '../constants/api'
import Taro from '@tarojs/taro'
import { getJSON, postJSON } from '../utils/request'

export function accesstokenCheck(params) {
    return async dispatch => {
        const result = await postJSON(api.checkUserToken, params)
        if (result && result.data) {
            if (result.data.success) {
                result.data.accesstoken = params.accesstoken
                dispatch({ //验证成功
                    type: 'accesstokenSuccess',
                    userMessage: result.data
                })
                return result.data
            } else { // 验证失败
                console.log(333)
                dispatch({
                    type: 'accesstokenFail'
                })
                Taro.showToast({ uri: result.data.error_msg, icon: 'none' })
            }
        }

    }
}

export async function getUserDetail(params) {
    const result = await getJSON(api.getUserInfo + params.loginname)
    if (result && result.data) {
        if (result.data.success) {
            return result.data
        }
    }
}

export async function publishTopic(params) {
    const result = await postJSON(api.createTopic, params)
    if (result && result.data) {
        if (result.data.success) {
            return result.data
        }
    }
}

export function validateUser(params) {
    if (params && params.accesstoken) {
        return true
    }
    Taro.navigateTo({ url: '/pages/login/index' })
    return false
}
