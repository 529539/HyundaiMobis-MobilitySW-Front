import { CourseService } from "./service/courseservice";

export const SearchCourse = async (
	totalTime,
	startLocation,
	endLocation,
	hashtag
) => {
	try {
		const response = await CourseService.searchCourse(
			totalTime,
			startLocation,
			endLocation,
			hashtag
		);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const PostCourse = async (
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
) => {
	try {
		const response = await CourseService.postCourse(
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
		);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
