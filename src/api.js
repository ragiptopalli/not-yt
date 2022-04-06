import axios from "axios";

const requestVideos = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBV3SOijqAUDQIckOHc1_nLF0biiX1c7aM",
  },
});

export default requestVideos;
