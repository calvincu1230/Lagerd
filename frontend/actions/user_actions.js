import * as UserUtil from "../utils/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const recieveUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
};

export const fetchUsers = () => dispatch => {
  return UserUtil.fetchUsers()
    .then(users => dispatch(recieveUsers(users)));
}