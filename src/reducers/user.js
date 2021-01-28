import { getCache, setCache } from '../utils/cache'
const userKey = 'cnodeUserKey'
const userCache = getCache(userKey)
const USER = {
    userMessage: { ...userCache }
}

export default function user(prestate = USER, action) {
    switch (action.type) {
        case 'accesstokenSuccess':
            const userDataSuccess = { ...prestate, userMessage: action.userMessage }
            setCache(userKey, action.userMessage)
            return userDataSuccess
        case 'accesstokenFail':
            const userDataFail = { ...prestate, userMessage: null }
            setCache(userKey, { userMessage: null })
            return userDataFail
        default:
            return { ...prestate }
    }

}