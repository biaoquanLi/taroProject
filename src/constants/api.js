const baseUrl = 'https://cnodejs.org/api/v1'
const apiObj = {
    getTopics: baseUrl + '/topics', // 获取话题列表
    getTopicInfo: baseUrl + '/topic', // 获取话题详情
    checkUserToken: baseUrl + '/accesstoken', // 验证用户token
    getUserInfo: baseUrl + '/user/', // 获取用户信息
    createTopic: baseUrl + '/topics', // 新建话题
    replyTopic: baseUrl + '/topic/', // 回复话题消息
    updateReply: baseUrl + '/reply', //点赞
}
export default apiObj