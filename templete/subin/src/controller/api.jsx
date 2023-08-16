import axios from "axios";
// const url = "https://hackerton.batro.org:8000";
const url = "http://hackerton.batro.org:8000";

export const transferImg = data => {
  let apiUrl = `${url}/transferImage`;
  return axios.post(apiUrl, data);
};
