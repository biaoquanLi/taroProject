const TOPIC_LIST = {
    page: 1,
    limit: 20,
    tab: '',
    topicList: [],
    topicInfo: {},
    replies: []
}

export default function topicList(prestate = TOPIC_LIST, action) {
    switch (action.type) {
        case 'getTopicList':
            return { ...prestate, topicList: action.topicList, page: 1 }
        case 'getNextTopicList':
            return { ...prestate, topicList: prestate.topicList.concat(action.topicList), page: action.page }
        case 'getTopicInfo':
            return { ...prestate, topicInfo: { ...action.topicInfo, replies: null }, replies: action.topicInfo.replies }
        default:
            return { ...prestate }
    }
}

