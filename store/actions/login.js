import * as actionTypes from './actionTypes';

export const loginFacebook = (user, token) => ({
    type: actionTypes.LOGIN_FACEBOOK,
    user,
    token
});

export const loginFacebookSuccess = (user, token) => ({
    type: actionTypes.LOGIN_FACEBOOK_SUCCESS,
    user,
    token
});