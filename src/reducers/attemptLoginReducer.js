import {
  LOGIN_REQUEST_ATTEMPTING,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  LOGOUT,
} from "../actions/SignInActions";

export default function attemptLoginReducer(
  state = { username: "", password: "", status: null },
  action
) {
  // console.log("Attempting Login", action);
  switch (action.type) {
    case LOGIN_REQUEST_ATTEMPTING:
      return {
        ...state,
        username: action.username,
        password: action.password,
        status: action.type,
      };
    case LOGIN_REQUEST_SUCCESS:
      return { ...state, status: action.type, isLoggedIn: true };
    case LOGIN_REQUEST_ERROR:
      return { ...state, username: "", password: "", status: action.type };
    case LOGOUT:
      return {
        ...state,
        username: "",
        password: "",
        status: action.type,
        isLoggedIn: false,
      };
    default:
      return { ...state };
  }
}
