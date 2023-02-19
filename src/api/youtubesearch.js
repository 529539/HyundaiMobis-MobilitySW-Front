import axios from "axios";

const searchUrl = "https://www.googleapis.com/youtube/v3/search";
const key = process.env.REACT_APP_GA_CLIENT_ID;

const YoutubeSearch = {
	youtubeSearch: (q) =>
		axios.get(
			`${searchUrl}?part=snippet&maxResults=1&q=${q}&regionCode=KR&type=video&key=${key}`
		),
};

export const SearchYoutube = async (q) => {
	try {
		const response = await YoutubeSearch.youtubeSearch(q);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
