import React, { useState } from "react";
import CourseBookmarkMenu from "../../components/Archive/CourseBookmarkMenu";
import BottomBar from "../../components/common/BottomBar";

const CourseBookmark = () => {
	const [isCourse, setIsCourse] = useState(false);
	return (
		<>
			<CourseBookmarkMenu />
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default CourseBookmark;
