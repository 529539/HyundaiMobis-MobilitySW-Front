import axios from "axios";

export const http = axios.create({
	baseURL: "http://3.39.137.44:3000",
});

http.defaults.withCredentials = true;
