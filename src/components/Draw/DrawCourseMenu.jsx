import React from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";

const DrawCourseMenu = () => {
	return (
		<>
			<Wrapper>
				<TopBar title="코스 직접 그리기" logo={false} back={true} />
				<h1>코스 그리기</h1>
			</Wrapper>
		</>
	);
};

export default DrawCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
