import { http } from "../http";

export const ArchiveService = {
	getDrivedCourse: (userId) => http.get(`/drive/${userId}`),
	getBookmarkCourse: (userId) => http.get(`/course/scrap/${userId}`),
	getUploadedCourse: (userId) => http.get(`/course/draw/${userId}`),
	postBookmarkCourse: (courseId) =>
		http.post(`/course/scrap/${courseId}`, { userId: 1 }),
	deleteBookmarkCourse: (scrapId) =>
		http.delete(`/course/scrap/${scrapId}`, { userId: 1 }),
	deleteUploadedCourse: (courseId) =>
		http.delete(`/course/draw/${courseId}`, { userId: 1 }),
};
