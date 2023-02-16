import React, { useState } from "react";
import UploadedCourseMenu from "../../components/Archive/UploadedCourseMenu";
import BottomBar from "../../components/common/BottomBar";

const UploadedCourse = () => {
	const [isCourse, setIsCourse] = useState(false);
	return (
		<>
			<UploadedCourseMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default UploadedCourse;
