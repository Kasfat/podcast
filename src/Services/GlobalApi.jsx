import axios from "axios";

const API = axios.create({
    baseURL: "https://api.lyrics.ovh/suggest/e",
  });

  export default API;