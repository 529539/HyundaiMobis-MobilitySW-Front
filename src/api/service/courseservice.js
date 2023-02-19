import { http } from "../http";

export const CourseService = {
	searchCourse: (totalTime, startLocation, endLocation, hashtag) =>
		http.get("/api/course/search", {
			totalTime: totalTime,
			startLocation: startLocation,
			endLocation: endLocation,
			hashtag: hashtag,
		}),
	postCourse: (
		description,
		startLocation,
		startDetail,
		endLocation,
		endDetail,
		hashtag,
		music,
		color1,
		color2,
		path
	) =>
		http.post("/api/course/draw", {
			userId: 1,
			discription: description,
			totalTime: 0,
			startLocation: startLocation,
			startDetail: startDetail,
			endLocation: endLocation,
			endDetail: endDetail,
			hashtag: hashtag,
			music: music,
			scrap: 0,
			color1: color1,
			color2: color2,
			path: path,
		}),
};
