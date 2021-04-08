import axios from "axios";
const KEY = "AIzaSyBPxCFdE8xS1zsVAA3iWuzD0gcgg0FL5RM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
