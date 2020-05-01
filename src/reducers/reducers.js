import {
  BLOG_SUCCESS,
  HIDE_BLOGS,
  BLOG_REQUEST_ERROR,
  LOGIN_REQUEST_ATTEMPTING,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from "../actions/actions";
import { combineReducers } from "redux";

function setBlogsReducer(state = { blogs: [], status: null }, action) {
  console.log("setBlogsReducer", action);
  switch (action.type) {
    case BLOG_SUCCESS:
      return { ...state, blogs: action.blogs, status: action.type };
    case HIDE_BLOGS:
      return { ...state, blogs: [], status: action.type };
    case BLOG_REQUEST_ERROR:
      return { ...state, blogs: [], status: action.type };
    default:
      return state;
  }
}

function attemptLoginReducer(
  state = { username: "", password: "", status: null },
  action
) {
  console.log("Attempting Login", action);
  switch (action.type) {
    case LOGIN_REQUEST_ATTEMPTING:
      return {
        ...state,
        username: action.username,
        password: action.password,
        status: action.type,
      };
    case LOGIN_REQUEST_SUCCESS:
      return { ...state, status: action.type };
    case LOGIN_REQUEST_ERROR:
      return { ...state, username: "", password: "", status: action.type };
    default:
      return { ...state };
  }
}

export const rootReducer = combineReducers({
  setBlogsReducer,
  attemptLoginReducer,
});
