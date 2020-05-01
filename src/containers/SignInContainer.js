import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { attemptLoginInjector } from "../actions/actions";

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
    status: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundAttemptLogin: attemptLoginInjector(dispatch),
  };
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
