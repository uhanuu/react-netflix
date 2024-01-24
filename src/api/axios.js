import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "590ec5ad95d0d972ccb483dad9924770",
    language: "ko-KR",
  },
});

export default instance;
