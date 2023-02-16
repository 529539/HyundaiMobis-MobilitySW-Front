import React, { useState } from "react";
import DrivedCourseMenu from "../../components/Archive/DrivedCourseMenu";
import BottomBar from "../../components/common/BottomBar";

const DrivedCourse = () => {
	const [isCourse, setIsCourse] = useState(false);
	return (
		<>
			<DrivedCourseMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default DrivedCourse;
