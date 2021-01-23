const MENU_STATE = {
    cataData: [
        {
            key: 'all', value: '全部'
        },
        {
            key: 'good', value: '精华'
        },
        {
            key: 'share', value: '分享'
        },
        {
            key: 'ask', value: '问答'
        },
        {
            key: 'job', value: '招聘'
        },
        {
            key: 'dev', value: '客户端测试'
        }
    ],
    currentCata: { key: 'all', value: '全部' },
    isShowDrawer: false
}

export default function menu(prestate = MENU_STATE, action) {
    switch (action.type) {
        case 'showDrawer':
            return { ...prestate, isShowDrawer: true }
        case 'hideDrawer':
            return { ...prestate, isShowDrawer: false }
        case 'changeCata':
            return { ...prestate, currentCata: action.currentCata }
        default:
            return { ...prestate }
    }
}