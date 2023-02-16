import React, { useState } from "react";
import DrawCourseMenu from "../../components/Draw/DrawCourseMenu";
import BottomBar from "../../components/common/BottomBar";

const DrawCourse = () => {
	const [isCourse, setIsCourse] = useState(true);
	return (
		<>
			<DrawCourseMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default DrawCourse;
