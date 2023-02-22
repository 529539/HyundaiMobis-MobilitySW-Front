import { CourseService } from "./service/courseservice";

export const SearchCourse = async (totalTime, startLocation) => {
	try {
		const response = await CourseService.searchCourse(totalTime, startLocation);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const GetCourse = async (courseId) => {
	try {
		const response = await CourseService.getCourse(courseId);
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
	totalTime,
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
			totalTime,
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

export const PostDrive = async (courseId) => {
	try {
		const response = await CourseService.postDrive(courseId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const PatchDrive = async (driveId) => {
	try {
		const response = await CourseService.patchDrive(driveId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
