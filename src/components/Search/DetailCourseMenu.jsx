import React from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";

const DetailCourseMenu = () => {
	return (
		<Wrapper>
			<TopBar title="코스 상세" logo={false} back={true} />
		</Wrapper>
	);
};

export default DetailCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
