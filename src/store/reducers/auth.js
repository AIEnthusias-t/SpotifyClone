import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    token: null
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token
    })
}
const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}

export default reducer;