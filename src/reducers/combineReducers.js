import { combineReducers } from "redux";
import attemptLoginReducer from "./attemptLoginReducer";
import setBlogsReducer from "./setBlogsReducer";
import createUserReducer from "./createUserReducer";

export const rootReducer = combineReducers({
  setBlogsReducer,
  attemptLoginReducer,
  createUserReducer,
});
