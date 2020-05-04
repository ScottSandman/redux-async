import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { attemptLoginInjector, logOut } from "../actions/SignInActions";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.attemptLoginReducer.isLoggedIn,
    username: state.attemptLoginReducer.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundAttemptLogin: attemptLoginInjector(dispatch),
    boundLogOut: () => dispatch(logOut()),
  };
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
