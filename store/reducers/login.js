import * as actionTypes from '../actions/actionTypes';

const initialState = { 
    user: null,
    token: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_FACEBOOK: 
            return {
                ...state
            }
        case actionTypes.LOGIN_FACEBOOK_SUCCESS: 
            return {
                ...state,
                user: action.user,
                token: action.token
            }
        default: 
            return state
    }
}

export default loginReducer;