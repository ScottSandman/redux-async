import { createUserInjector } from "../actions/CreateUserActions";
import { connect } from "react-redux";
import CreateUser from "../components/CreateUser";
import { logOut } from "../actions/SignInActions";

const mapStateToProps = (state) => {
  return {
    username: state.createUserReducer.username,
    boundLogOut: state.attemptLoginReducer.boundLogOut,
    isLoggedIn: state.attemptLoginReducer.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundCreateUser: createUserInjector(dispatch),
    boundLogOut: () => dispatch(logOut()),
  };
};

const CreateUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);

export default CreateUserContainer;
