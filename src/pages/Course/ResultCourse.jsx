import React, { useState } from "react";
import ResultCourseMenu from "../../components/Search/ResultCourseMenu";
import BottomBar from "../../components/common/BottomBar";

const ResultCourse = () => {
	const [isCourse, setIsCourse] = useState(true);
	return (
		<>
			<ResultCourseMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default ResultCourse;
