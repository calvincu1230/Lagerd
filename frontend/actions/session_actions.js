import * as SessionUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECIEVE_ERRORS = "RECIEVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const receieveErrors = errors => {
    return {
        type: RECIEVE_ERRORS,
        errors
    };
};

export const login = user => dispatch => {
    return SessionUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
            errors => {

                return dispatch(receieveErrors(errors.responseJSON))
            }
        );
        // .then on promise object has success and fail callbacks passed in
};

export const logout = () => dispatch => {
    return SessionUtil.logout()
        .then(() => dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch => {
    return SessionUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
            errors => {
                return dispatch(receieveErrors(errors.responseJSON))
            }
        );
};

export const loginDemoUser = () => dispatch => {
    return SessionUtil.loginDemoUser()
        .then(user => dispatch(receiveCurrentUser(user)), 
            errors => {
                return dispatch(receieveErrors(errors.responseJSON))
            }
        );
        // .then on promise object has success and fail callbacks passed in
};