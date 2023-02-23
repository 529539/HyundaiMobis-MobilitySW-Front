import axios from "axios";

export const http = axios.create({
	baseURL: "https://3.34.224.240:3000",
});

http.defaults.withCredentials = true;
