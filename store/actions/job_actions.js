import axios from "axios";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";
import { FETCH_JOBS, LIKE_JOBS, CLEAR_JOBS } from "./types";

const JOB_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const JOB_QUERIES = {
  publisher: "123412341234123",
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript",
};

const buildUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERIES, l: zip });
  console.log(`${JOB_ROOT_URL}${query}`);
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildUrl(zip);
    let { data } = await axios.get(url);
    console.log(data);
    dispatch({ type: FETCH_JOBS, payload: data });
  } catch (err) {
    console.log("Erro", err);
  }
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOBS,
  };
};

export const clearJobs = () => {
  return {
    type: CLEAR_JOBS,
  };
};
