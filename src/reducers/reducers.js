import {
  BLOG_SUCCESS,
  HIDE_BLOGS,
  BLOG_REQUEST_ERROR,
} from "../actions/actions";

export function setBlogsReducer(state = { blogs: [], status: null }, action) {
  console.log(action);
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
