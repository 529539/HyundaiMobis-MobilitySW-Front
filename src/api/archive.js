import { ArchiveService } from "./service/archiveservice";

export const GetUploadedCourse = async (courseId) => {
	try {
		const response = await ArchiveService.getUploadedCourse(courseId);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
