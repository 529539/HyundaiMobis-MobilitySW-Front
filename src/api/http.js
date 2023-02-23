import axios from "axios";

export const http = axios.create({
	baseURL: "https://api.moodrive.link",
});

http.defaults.withCredentials = true;
