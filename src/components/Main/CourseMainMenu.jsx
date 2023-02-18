import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import lottiesearch from "../../assets/lottie/lottiesearch";
import lottiemap from "../../assets/lottie/lottiemap";
import arrow from "../../assets/arrow.svg";

const CourseMainMenu = () => {
	const nav = useNavigate();
	return (
		<Wrapper>
			<TopBar text="" logo={true} back={false} />
			<div className="title-text">코스 검색 메인</div>
			<MenuDiv onClick={() => nav("/search-course")}>
				{lottiesearch()}
				<Gradient />
				<MenuTitle>조건으로 검색</MenuTitle>
				<MenuDetail>
					소요 시간, 출발지, 목적지, 경유지, 무드 해시태그(조명, 음악)
				</MenuDetail>
				<Arrow src={arrow} />
			</MenuDiv>
			<MenuDiv onClick={() => nav("/draw-course")}>
				{lottiemap()}
				<Gradient />
				<MenuTitle>코스 직접 그리기</MenuTitle>
				<MenuDetail>
					내가 주행하고 싶은 동선을 직접 손으로 그리는 커스텀 코스
				</MenuDetail>
				<Arrow src={arrow} />
			</MenuDiv>
		</Wrapper>
	);
};

export default CourseMainMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.title-text {
		margin-top: 20px;
		font-family: "Pretendard";
		font-weight: 500;
		font-size: 24px;
		text-align: center;
		color: #263f81;
		height: 50px;
	}
`;

const MenuDiv = styled.div`
	width: 80%;
	height: 220px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	margin-bottom: 60px;
	overflow: hidden;
`;

const Gradient = styled.div`
	width: 100%;
	height: 220px;
	border-radius: 15px;
	position: absolute;
	z-index: 10;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 61.46%,
		rgba(0, 0, 0, 0.3) 100%
	);
`;

const MenuTitle = styled.div`
	position: absolute;
	z-index: 30;
	left: 20px;
	top: 125px;
	background-color: transparent;
	font-family: "Pretendard";
	font-weight: 500;
	font-size: 24px;
	color: #000;
`;

const MenuDetail = styled.div`
	width: 70%;
	word-break: keep-all;
	position: absolute;
	z-index: 30;
	left: 20px;
	top: 160px;
	background-color: transparent;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 16px;
	color: #727272;
`;

const Arrow = styled.img`
	position: absolute;
	background-color: transparent;
	transform: rotate(180deg);
	right: 25px;
	top: 170px;
`;
