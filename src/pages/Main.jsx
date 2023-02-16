import React, { useState } from "react";
import CourseMainMenu from "../components/Main/CourseMainMenu";
import ArchiveMainMenu from "../components/Main/ArchiveMainMenu";
import BottomBar from "../components/common/BottomBar";

const Main = () => {
	const [isCourse, setIsCourse] = useState(true);
	return (
		<>
			{isCourse ? <CourseMainMenu /> : <ArchiveMainMenu />}
			<BottomBar isCourse={isCourse} setIsCourse={setIsCourse} />
		</>
	);
};

export default Main;
