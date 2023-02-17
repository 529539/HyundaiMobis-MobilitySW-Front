import React, { useEffect } from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";

const PostCourseMenu = (props) => {
	const { drawpath } = props;
	useEffect(() => {
		console.log(drawpath);
	}, []);
	return (
		<Wrapper>
			<TopBar title="코스 등록하기" logo={false} back={true} />
			<Container>
				<h1>.</h1>
			</Container>
		</Wrapper>
	);
};

export default PostCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	margin-top: 60px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;
