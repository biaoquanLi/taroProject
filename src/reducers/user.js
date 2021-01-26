const USER = {
    userMessage: null
}

export default function user(prestate = USER, action) {
    switch (action.type) {
        case 'accesstokenSuccess':
            return {...prestate, userMessage:action.userMessage}
        case 'accesstokenFail':
            return {...prestate, userMessage:null}
        default:
            return { ...prestate }
    }

}