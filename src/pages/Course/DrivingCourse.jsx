import React, { useState } from "react";
import DrivingCourseMenu from "../../components/Drive/DrivingCourseMenu";
import BottomBar from "../../components/common/BottomBar";

const DrivingCourse = () => {
	const [isCourse, setIsCourse] = useState(true);
	return (
		<>
			<DrivingCourseMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default DrivingCourse;
