import axios from "axios";

// blog component
// component that shows list of all blogs
// component that shows blogs filtered by author (selected by user)
// component that shows author their personal blogs

// Visiibilty Filter - Show All, Show By Author, Show by selected Author

export const SET_BLOGS = "SET_BLOGS";
export const BLOG_REQUEST = "BLOG_REQUEST";
export const BLOG_SUCCESS = "BLOG_SUCCESS";
export const HIDE_BLOGS = "HIDE_BLOGS";
export const BLOG_REQUEST_ERROR = "BLOG_REQUEST_ERROR";
export const LOGIN_REQUEST_ATTEMPTING = "LOGIN_REQUEST_ATTEMPTING";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR";
export const LOGOUT = "LOGOUT";

//action creators

export function setBlogs(blogs) {
  return {
    type: SET_BLOGS,
    blogs: blogs,
  };
}

export function hideBlogs() {
  return {
    type: HIDE_BLOGS,
  };
}

function loginRequestAttempting(username, password) {
  return {
    type: LOGIN_REQUEST_ATTEMPTING,
    username: username,
    password: password,
  };
}

function loginRequestSuccess() {
  return {
    type: LOGIN_REQUEST_SUCCESS,
  };
}

function loginRequestError() {
  return {
    type: LOGIN_REQUEST_ERROR,
  };
}

export function logOut() {
  return {
    type: LOGOUT,
  };
}

async function getBlogs(dispatch) {
  dispatch({ type: BLOG_REQUEST });
  console.log("getBlogs");
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:4000/blogs",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    dispatch({ type: BLOG_SUCCESS, blogs: response.data[0] });
  } catch (error) {
    dispatch({ type: BLOG_REQUEST_ERROR });
    console.log(error);
  }
}

async function attemptLogin(dispatch, username, password) {
  dispatch(loginRequestAttempting(username, password));
  //   console.log("attemptingLogin", username, password);
  try {
    const response = await axios({
      method: "post",
      withCredentials: true,
      url: "http://localhost:4000/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: password,
      },
    });
    // console.log("login attempt response", response);
    dispatch(loginRequestSuccess());
  } catch (error) {
    dispatch(loginRequestError());
    console.log(error);
  }
}

export function getBlogsInjector(dispatch) {
  return () => getBlogs(dispatch);
}

export function attemptLoginInjector(dispatch) {
  return (username, password) => {
    attemptLogin(dispatch, username, password);
  };
}
