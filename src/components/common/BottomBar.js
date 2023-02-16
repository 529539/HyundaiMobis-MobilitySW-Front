import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BottomBar = (props) => {
	const nav = useNavigate();
	const { isCourse, setIsCourse } = props;
	return (
		<BottomBarDiv>
			<InnerDiv>
				<ClickDiv
					onClick={() => {
						setIsCourse(true);
						nav("/");
					}}
				>
					<div className="icon1">🛣️</div>
					<div
						className="text"
						style={{
							backgroundColor: isCourse ? "#e92b25" : "#fff",
							fontWeight: isCourse ? "700" : "400",
							color: isCourse ? "#fff" : "#727272",
						}}
					>
						코스 검색
					</div>
				</ClickDiv>
			</InnerDiv>
			<InnerDiv>
				<ClickDiv
					onClick={() => {
						setIsCourse(false);
						nav("/");
					}}
				>
					<div className="icon2">📁</div>
					<div
						className="text"
						style={{
							backgroundColor: isCourse ? "#fff" : "#e92b25",
							fontWeight: isCourse ? "400" : "700",
							color: isCourse ? "#727272" : "#fff",
						}}
					>
						아카이빙
					</div>
				</ClickDiv>
			</InnerDiv>
		</BottomBarDiv>
	);
};

export default BottomBar;

const BottomBarDiv = styled.div`
	width: 100%;
	height: 100px;
	position: fixed;
	z-index: 100;
	bottom: 0;
	display: flex;
	border-top: 1px solid #eaeaea;
	box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.25);
	@media (min-width: 390px) {
		width: 390px;
	}
`;

const InnerDiv = styled.div`
	width: 50%;
	height: 66px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ClickDiv = styled.div`
	width: 60px;
	height: 66px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.icon1,
	.icon2 {
		font-family: "Pretendard";
		font-size: 30px;
		width: 100%;
		text-align: center;
	}
	.icon2 {
		font-size: 25px;
		margin-top: 5px;
	}
	.text {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 20px;
		border-radius: 10px;
	}
`;
