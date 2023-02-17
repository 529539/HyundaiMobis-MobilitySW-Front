import React from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import { GoSearch } from "react-icons/go";

const ResultCourseMenu = () => {
	return (
		<Wrapper>
			<TopBar title="검색 결과" logo={false} back={true} />
			<Container>
				<SearchBox>
					<GoSearch fill="#727272" />
					<p>30분, 목적지: 마포구, #신나는</p>
				</SearchBox>
				<p className="recom">추천순</p>
				<h1>.</h1>
			</Container>
		</Wrapper>
	);
};

export default ResultCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	margin-top: 90px;
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	.recom {
		position: absolute;
		top: 55px;
		right: 10px;
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 13px;
		line-height: 16px;
		color: #727272;
	}
`;

const SearchBox = styled.div`
	width: 95%;
	height: 40px;
	border: 1px solid #eaeaea;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	svg {
		padding: 10px;
	}
	p {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 15px;
		line-height: 40px;
	}
`;
