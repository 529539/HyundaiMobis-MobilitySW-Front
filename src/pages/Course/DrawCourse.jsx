import React, { useState } from "react";
import DrawCourseMenu from "../../components/Draw/DrawCourseMenu";
import PostCourseMenu from "../../components/Draw/PostCourseMenu";
import BottomBar from "../../components/common/BottomBar";

const DrawCourse = () => {
	const [isCourse, setIsCourse] = useState(true);
	const [isDrawing, setIsDrawing] = useState(true);
	const [drawpath, setDrawpath] = useState([]);
	return (
		<>
			{isDrawing ? (
				<DrawCourseMenu
					drawpath={drawpath}
					setDrawpath={setDrawpath}
					setIsDrawing={setIsDrawing}
				/>
			) : (
				<PostCourseMenu drawpath={drawpath} setIsDrawing={setIsDrawing} />
			)}
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default DrawCourse;
