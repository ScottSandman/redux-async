import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../actions/CreateUserActions";

export default function createUserReducer(
  state = { username: "", password: "", status: null },
  action
) {
  //   console.log("Look here", state, "action", action);
  switch (action.type) {
    case CREATE_USER_ATTEMPT:
      return {
        ...state,
        username: action.username,
        password: action.password,
        status: action.type,
      };
    case CREATE_USER_ERROR:
      return { ...state, username: "", password: "", status: action.type };
    case CREATE_USER_SUCCESS:
      return { ...state, status: action.type };
    default:
      return { ...state };
  }
}
