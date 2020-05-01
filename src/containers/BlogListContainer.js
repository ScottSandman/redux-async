import { connect } from "react-redux";
import { getBlogsInjector, hideBlogs } from "../actions/actions";
import BlogList from "../components/BlogList";

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    status: state.status,
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
