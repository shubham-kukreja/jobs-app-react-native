import { LIKE_JOBS, CLEAR_JOBS } from "../actions/types";
const initailState = {
  likedJobs: [],
};
export default (state = initailState, action) => {
  switch (action.type) {
    case LIKE_JOBS:
      return { ...state, likedJobs: [...state.likedJobs, action.payload] };
    case CLEAR_JOBS:
      return { ...state, likedJobs: [] };
    default:
      return state;
  }
};
