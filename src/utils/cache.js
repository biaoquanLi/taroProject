import Taro from '@tarojs/taro'

export function getCache(key) {
    let value = Taro.getStorageSync(key)
    if (value) {
        return JSON.parse(value)
    } else {
        return null
    }
}

export function setCache(key, value) {
    let data = value
    if (typeof value === 'object') {
        data = JSON.stringify(value)
    }
    Taro.setStorageSync(key, data)
}