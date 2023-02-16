import React, { useState } from "react";
import DetailCourseMenu from "../../components/Search/DetailCourseMenu";
import BottomBar from "../../components/common/BottomBar";

const DetailCourse = () => {
	const [isCourse, setIsCourse] = useState(true);
	return (
		<>
			<DetailCourseMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default DetailCourse;
