import { connect } from "react-redux";
import { getBlogsInjector, hideBlogs } from "../actions/actions";
import BlogList from "../components/BlogList";

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    blogs: state.setBlogsReducer.blogs,
    status: state.setBlogsReducer.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundGetBlogs: getBlogsInjector(dispatch),
    boundHideBlogs: () => dispatch(hideBlogs()),
  };
};

const BlogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList);

export default BlogListContainer;
