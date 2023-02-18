import axios from "axios";

export const http = axios.create({
	baseURL: "https://server.cheercharms.link",
});

http.defaults.withCredentials = true;
