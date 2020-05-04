import { connect } from "react-redux";
import Welcome from "../components/Welcome";

const mapStateToProps = (state) => {
  console.log(state.attemptLoginReducer.username);
  return {
    username: state.attemptLoginReducer.username,
  };
};

const WelcomeContainer = connect(mapStateToProps)(Welcome);

export default WelcomeContainer;
