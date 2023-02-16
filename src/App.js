import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import CourseSearch from "./pages/Course/CourseSearch";
import ResultCourse from "./pages/Course/ResultCourse";
import DetailCourse from "./pages/Course/DetailCourse";
import DrawCourse from "./pages/Course/DrawCourse";
import DrivedCourse from "./pages/Archive/DrivedCourse";
import CourseBookmark from "./pages/Archive/CourseBookmark";
import UploadedCourse from "./pages/Archive/UploadedCourse";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route exact path="/search-course" element={<CourseSearch />} />
					<Route
						exact
						path="/search-course/result"
						element={<ResultCourse />}
					/>
					<Route
						exact
						path="/search-course/:courseId"
						element={<DetailCourse />}
					/>
					<Route exact path="/draw-course" element={<DrawCourse />} />
					<Route exact path="/drived" element={<DrivedCourse />} />
					<Route exact path="/bookmark" element={<CourseBookmark />} />
					<Route exact path="/uploaded" element={<UploadedCourse />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
