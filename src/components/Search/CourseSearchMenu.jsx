import React from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";

const CourseSearchMenu = () => {
	return (
		<Wrapper>
			<TopBar title="조건으로 검색" logo={false} back={true} />
		</Wrapper>
	);
};

export default CourseSearchMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
