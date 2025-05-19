import axios from "axios";

const instance = axios.create({
    baseURL: "https://usertask-zcr0.onrender.com/",
});

export default instance;
