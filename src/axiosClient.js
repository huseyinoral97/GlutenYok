import axios from "axios";
const axiosClient = axios.create({
    baseURL: `https://glutenyok.com/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
export default axiosClient;
