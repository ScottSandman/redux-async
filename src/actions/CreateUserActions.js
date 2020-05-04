import axios from "axios";

export const CREATE_USER_ATTEMPT = "CREATE_USER_ATTEMPT";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";

export function createUserAttempt(username, password) {
  return {
    type: CREATE_USER_ATTEMPT,
    username,
    password,
  };
}

export function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS,
  };
}

export function createUserError() {
  return {
    type: CREATE_USER_ERROR,
  };
}

async function createUser(dispatch, username, password) {
  dispatch(createUserAttempt(username));
  try {
    const response = await axios({
      method: "post",
      withCredentials: true,
      url: "http://localhost:4000/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: password,
      },
    });
    dispatch(createUserSuccess());
  } catch (error) {
    console.log(error);
    dispatch(createUserError());
  }
}

export function createUserInjector(dispatch) {
  return (username, password) => {
    createUser(dispatch, username, password);
  };
}
