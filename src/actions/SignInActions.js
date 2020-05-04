import axios from "axios";

export const LOGIN_REQUEST_ATTEMPTING = "LOGIN_REQUEST_ATTEMPTING";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR";
export const LOGOUT = "LOGOUT";

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

async function attemptLogin(dispatch, username, password) {
  dispatch(loginRequestAttempting(username, password));
  // console.log("attemptingLogin", username, password);
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
    // console.log(error);
  }
}

export function attemptLoginInjector(dispatch) {
  return (username, password) => {
    attemptLogin(dispatch, username, password);
  };
}
