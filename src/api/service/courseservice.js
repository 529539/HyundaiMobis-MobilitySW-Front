import { http } from "../http";

export const CourseService = {
	searchCourse: (totalTime, startLocation) =>
		http.get(`/course/search/${totalTime}/${startLocation}`),
	getCourse: (courseId) => http.get(`/course/detail/${courseId}`),
	postCourse: (
		description,
		startLocation,
		startDetail,
		endLocation,
		endDetail,
		hashtag,
		totalTime,
		music,
		color1,
		color2,
		path
	) =>
		http.post("/course/draw", {
			userId: 1,
			description: description,
			totalTime: 0,
			startLocation: startLocation,
			startDetail: startDetail,
			endLocation: endLocation,
			endDetail: endDetail,
			hashtag: hashtag,
			totalTime: totalTime,
			music: music,
			scrap: 0,
			color1: color1,
			color2: color2,
			path: path,
		}),
	postDrive: (courseId) => http.post(`/drive/${courseId}`, { userId: 1 }),
	patchDrive: (driveId) => http.patch(`/drive/${driveId}`),
};
