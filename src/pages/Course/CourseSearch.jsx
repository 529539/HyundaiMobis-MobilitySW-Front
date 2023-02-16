import React, { useState } from "react";
import CourseSearchMenu from "../../components/Search/CourseSearchMenu";
import BottomBar from "../../components/common/BottomBar";

const CourseSearch = () => {
	const [isCourse, setIsCourse] = useState(true);
	return (
		<>
			<CourseSearchMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default CourseSearch;
