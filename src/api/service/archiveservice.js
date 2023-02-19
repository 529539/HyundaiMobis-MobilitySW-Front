import { http } from "../http";

export const ArchiveService = {
	getUploadedCourse: (courseId) => http.get(`/api/course/draw/${courseId}`),
};
