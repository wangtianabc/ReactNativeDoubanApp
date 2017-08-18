const initState = {
    login: false,
    userName: ''
}

const loginReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                login: true,
                userName: action.payload.username,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                login: false,
                userName: '未登录',
            }
        default:
            return state
    }
}

export default { initState, loginReducer }