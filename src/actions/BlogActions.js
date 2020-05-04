import axios from "axios";

export const BLOG_REQUEST = "BLOG_REQUEST";
export const BLOG_SUCCESS = "BLOG_SUCCESS";
export const HIDE_BLOGS = "HIDE_BLOGS";
export const BLOG_REQUEST_ERROR = "BLOG_REQUEST_ERROR";

// export function setBlogs(blogs) {
//   return {
//     type: SET_BLOGS,
//     blogs: blogs,
//   };
// }

export function hideBlogs() {
  return {
    type: HIDE_BLOGS,
  };
}

// url: "http://localhost:4000/blogPosts" contains Auth
async function getBlogs(dispatch) {
  dispatch({ type: BLOG_REQUEST });
  console.log("getBlogs");
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:4000/blog",
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

export function getBlogsInjector(dispatch) {
  return () => getBlogs(dispatch);
}
