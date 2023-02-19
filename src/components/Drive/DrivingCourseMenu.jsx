import React from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import PathtoMap from "./PathtoMap";

const DrivingCourseMenu = () => {
	return (
		<Wrapper>
			<TopBar text="" logo={true} back={false} />
			<PathtoMap />
		</Wrapper>
	);
};

export default DrivingCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
