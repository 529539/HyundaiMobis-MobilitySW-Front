import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import lottiehistory from "../../assets/lottie/lottiehistory";
import lottiebookmark from "../../assets/lottie/lottiebookmark";
import lottiesave from "../../assets/lottie/lottiesave";
import arrow from "../../assets/arrow.svg";

const ArchiveMainMenu = () => {
	const nav = useNavigate();
	return (
		<Wrapper>
			<TopBar text="" logo={true} back={false} />
			<div className="title-text">아카이브 메인</div>
			<MenuDiv onClick={() => nav("/drived")}>
				{lottiehistory()}
				<Gradient />
				<MenuTitle>나의 주행 기록</MenuTitle>
				<MenuDetail>
					000에서 주행한 <br /> 나의 모든 주행 기록 열람
				</MenuDetail>
				<Arrow src={arrow} />
			</MenuDiv>
			<MenuDiv onClick={() => nav("/bookmark")}>
				{lottiebookmark()}
				<Gradient />
				<MenuTitle>내가 즐겨찾기한 코스</MenuTitle>
				<MenuDetail>
					코스 검색에서 내가 즐겨찾기한 <br /> 다른 사용자들의 코스 열람, 삭제
				</MenuDetail>
				<Arrow src={arrow} />
			</MenuDiv>
			<MenuDiv
				onClick={() => nav("/uploaded")}
				style={{ marginBottom: "150px" }}
			>
				{lottiesave()}
				<Gradient />
				<MenuTitle>내가 등록한 코스</MenuTitle>
				<MenuDetail>
					주행을 마치고 다른 사용자들에게 <br /> 추천되도록 업로드한 코스 열람,
					삭제
				</MenuDetail>
				<Arrow src={arrow} />
			</MenuDiv>
		</Wrapper>
	);
};

export default ArchiveMainMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.title-text {
		position: relative;
		margin-top: 100px;
		font-family: "Pretendard";
		font-weight: 500;
		font-size: 24px;
		text-align: center;
		color: #263f81;
		height: 60px;
	}
`;

const MenuDiv = styled.div`
	width: 80%;
	height: 180px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	margin-bottom: 40px;
	overflow: hidden;
`;

const Gradient = styled.div`
	width: 100%;
	height: 180px;
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
	top: 88px;
	background-color: transparent;
	font-family: "Pretendard";
	font-weight: 500;
	font-size: 23px;
	color: #000;
`;

const MenuDetail = styled.div`
	width: 70%;
	word-break: keep-all;
	position: absolute;
	z-index: 30;
	left: 20px;
	top: 125px;
	background-color: transparent;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 15px;
	color: #727272;
`;

const Arrow = styled.img`
	position: absolute;
	background-color: transparent;
	transform: rotate(180deg);
	right: 25px;
	top: 135px;
`;
