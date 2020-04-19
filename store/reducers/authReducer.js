import { combineReducers } from "redux";
import authR from "./auth_reducer";
import liked from "./likes_reducer";
export default combineReducers({
  auth: authR,
  likedJobs: liked,
});
