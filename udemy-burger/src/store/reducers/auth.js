import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirect: '/'
}

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true });
}

const authSuccess = (state, action) => {
    return updateObject(state, { token: action.token, userId: action.userId, error: null, loading: false });
}

const authFailed = (state, action) => {
    return updateObject(state, { error: action.error, loading: false });
}

const authLogOut = (state, action) => {
    return updateObject(state, { token: null, userId: null, error: null, loading: false });
}

const setAuthRedirect = (state, action) => {
    return updateObject(state, { authRedirect: action.path });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAILED: return authFailed(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogOut(state, action);
        case actionTypes.SET_AUTH_REDIRECT: return setAuthRedirect(state, action);
        default: return state;
    }
}

export default reducer;