import React from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";

const ResultCourseMenu = () => {
	return (
		<Wrapper>
			<TopBar title="검색 결과" logo={false} back={true} />
		</Wrapper>
	);
};

export default ResultCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
