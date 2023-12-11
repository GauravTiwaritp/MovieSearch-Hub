import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_API_KEY;

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQ5Y2FjMjg3ZDJmN2RlYzJiYjQ3MGY4MTRhMTAxNyIsInN1YiI6IjY0ZDc1ODgwZjQ5NWVlMDI5MTllZDUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ViC1q_abOk7m-CmOB7sZXQMG2YApS2s2IRkz6VC7KzI",
  accept: "application/json",
};

export const fetchdataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
