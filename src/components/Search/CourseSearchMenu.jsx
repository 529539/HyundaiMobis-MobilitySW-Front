import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import { timearray, seoul, hashtagarray } from "./searchlist";

const CourseSearchMenu = () => {
	const nav = useNavigate();
	const [time, setTime] = useState(0);
	const [departures, setDepartures] = useState(null);
	const [dOpen, setDOpen] = useState(false);
	const [arrivals, setArrivals] = useState(null);
	const [aOpen, setAOpen] = useState(false);
	const [hashtag, setHashtag] = useState(null);
	const goSearch = () => {
		if (time === 0 || departures === null) {
			alert(
				"소요 시간과 출발지는 필수 입력 항목입니다.\n원하는 소요 시간, 출발지를 선택해주세요!"
			);
		} else {
			const searchQuery = {
				time: time,
				departures: departures,
				arrivals: arrivals,
				hashtag: hashtag,
			};
			nav(
				`/search-course/result?time=${searchQuery.time}&departures=${departures}&arrivals=${arrivals}&hashtag=${hashtag}`
			);
		}
	};
	useEffect(() => {
		// console.log(
		// 	"소요 시간: ",
		// 	time,
		// 	"\n출발지: ",
		// 	departures,
		// 	"\n목적지: ",
		// 	arrivals,
		// 	"\n무드 해시태그: ",
		// 	hashtag
		// );
	});
	useEffect(() => {
		setTime(0);
		setDepartures(null);
		setDOpen(false);
		setArrivals(null);
		setAOpen(false);
		setHashtag(null);
	}, []);
	return (
		<Wrapper>
			<TopBar title="조건으로 검색" logo={false} back={true} />
			<Container>
				<SectionTitle>
					🕙 소요 시간 <span style={{ color: "#E92B25" }}>*</span>
				</SectionTitle>
				<SelectContainer>
					{timearray.map((t) => {
						return (
							<SelectBox
								key={t.num}
								onClick={() => setTime(t.num)}
								style={{ backgroundColor: time === t.num ? "#eaeaea" : "#fff" }}
							>
								<p>{t.text}</p>
							</SelectBox>
						);
					})}
				</SelectContainer>
				<FlexWrapper>
					<SectionTitle style={{ marginTop: "20px" }}>
						🛫 출발지 <span style={{ color: "#E92B25" }}>*</span>
					</SectionTitle>
					<PlaceBox onClick={() => setDOpen(true)}>
						<p
							style={{
								color: departures !== null ? "#000" : "#727272",
								fontWeight: departures !== null ? "500" : "400",
							}}
						>
							{departures !== null ? departures : "선택"}
						</p>
					</PlaceBox>
				</FlexWrapper>
				<PlaceSelectContainer className={dOpen ? "open" : "close"}>
					{seoul.map((s) => {
						return (
							<PlaceSelectBox
								key={s + 1}
								onClick={() => {
									setDepartures(s);
									setDOpen(false);
								}}
								style={{
									backgroundColor: departures === s ? "#eaeaea" : "#fff",
								}}
							>
								<p>{s}</p>
							</PlaceSelectBox>
						);
					})}
				</PlaceSelectContainer>
				<FlexWrapper>
					<SectionTitle style={{ marginTop: "20px" }}>🛬 목적지</SectionTitle>
					<PlaceBox onClick={() => setAOpen(true)}>
						<p
							style={{
								color: arrivals !== null ? "#000" : "#727272",
								fontWeight: arrivals !== null ? "500" : "400",
							}}
						>
							{arrivals !== null ? arrivals : "선택"}
						</p>
					</PlaceBox>
				</FlexWrapper>
				<PlaceSelectContainer className={aOpen ? "open" : "close"}>
					{seoul.map((s) => {
						return (
							<PlaceSelectBox
								key={s + "2"}
								onClick={() => {
									setArrivals(s);
									setAOpen(false);
								}}
								style={{
									backgroundColor: arrivals === s ? "#eaeaea" : "#fff",
								}}
							>
								<p>{s}</p>
							</PlaceSelectBox>
						);
					})}
				</PlaceSelectContainer>
				<SectionTitle style={{ marginTop: "20px" }}>
					#️⃣ 무드 해시태그
				</SectionTitle>
				<SelectContainer>
					{hashtagarray.map((h) => {
						return (
							<SelectBox
								key={h}
								onClick={() => setHashtag(h)}
								style={{
									backgroundColor: hashtag === h ? "#eaeaea" : "#fff",
								}}
							>
								<p>#{h}</p>
							</SelectBox>
						);
					})}
				</SelectContainer>
				<ButtonBox onClick={() => goSearch()}>
					<p>검색하기</p>
					<div className="img">
						<svg
							width="10"
							height="17"
							viewBox="0 0 10 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 1L1 8.5L9 16"
								stroke="#e92b25"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</ButtonBox>
			</Container>
		</Wrapper>
	);
};

export default CourseSearchMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	margin-top: 90px;
	margin-bottom: 150px;
	width: 85%;
	display: flex;
	flex-direction: column;
	position: relative;
	.close {
		display: none;
	}
	.open {
		display: flex;
		@keyframes out {
			0% {
				height: 0px;
				opacity: 0;
			}
			35% {
				opacity: 0;
			}
			100% {
				margin-top: 0px;
				opacity: 1;
			}
		}
		animation-name: out;
		animation-duration: 0.4s;
	}
`;

const SectionTitle = styled.div`
	font-family: "Pretendard";
	font-weight: 600;
	font-size: 18px;
	color: #000;
	margin-bottom: 15px;
`;

const SelectContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const SelectBox = styled.div`
	min-width: 60px;
	height: 40px;
	border: 1px solid #eaeaea;
	border-radius: 20px;
	padding: 0 15px;
	margin: 0 10px 10px 0;
	p {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
		color: #000;
		background-color: transparent;
	}
`;

const FlexWrapper = styled.div`
	width: 100%;
	padding: 5px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const PlaceBox = styled.div`
	width: 125px;
	height: 30px;
	border: 1px solid #eaeaea;
	p {
		font-family: "Pretendard";
		font-size: 15px;
		line-height: 30px;
		text-align: center;
	}
`;

const PlaceSelectContainer = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const PlaceSelectBox = styled.div`
	min-width: 50px;
	height: 23px;
	border: 1px solid #eaeaea;
	border-radius: 20px;
	padding: 0 5px;
	margin: 0 10px 10px 0;
	p {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 14px;
		line-height: 23px;
		text-align: center;
		color: #000;
		background-color: transparent;
	}
`;

const ButtonBox = styled.div`
	position: relative;
	margin: 0 auto;
	margin-top: 20px;
	width: 200px;
	height: 46px;
	border: 1px solid #e92b25;
	border-radius: 23px;
	p {
		font-family: "Pretendard";
		font-weight: 600;
		font-size: 20px;
		line-height: 46px;
		text-align: center;
		color: #e92b25;
	}
	.img {
		position: absolute;
		transform: rotate(180deg);
		top: 10px;
		right: 13px;
	}
`;
