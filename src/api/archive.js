import { ArchiveService } from "./service/archiveservice";

export const GetDrivedCourse = async (userId) => {
	try {
		const response = await ArchiveService.getDrivedCourse(userId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const GetBookmarkCourse = async (userId) => {
	try {
		const response = await ArchiveService.getBookmarkCourse(userId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const GetUploadedCourse = async (userId) => {
	try {
		const response = await ArchiveService.getUploadedCourse(userId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const PostBookmarkCourse = async (courseId) => {
	try {
		const response = await ArchiveService.postBookmarkCourse(courseId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const DeleteBookmarkCourse = async (courseId) => {
	try {
		const response = await ArchiveService.deleteBookmarkCourse(courseId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const DeleteUploadedCourse = async (courseId) => {
	try {
		const response = await ArchiveService.deleteUploadedCourse(courseId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
