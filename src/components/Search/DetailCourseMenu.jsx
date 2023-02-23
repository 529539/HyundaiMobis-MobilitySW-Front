import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { SearchYoutube } from "../../api/youtubesearch";
import { GetCourse } from "../../api/course";
import TopBar from "../common/TopBar";
import PathtoMap from "../Drive/PathtoMap";
import mappreview from "../../assets/testmappreview.svg";

const DetailCourseMenu = () => {
	const nav = useNavigate();
	const params = useParams();
	const [currentCourse, setCurrentCourse] = useState({});
	const [videoID, setVideoID] = useState("");
	useEffect(() => {
		window.scrollTo(0, 0);
		GetCourse(params.id)
			.then((res) => {
				console.log(res.data);
				setCurrentCourse(res.data.data[0]);
			})
			.catch((err) => console.log(err));
	}, []);
	useEffect(() => {
		// 하루 요청 100회 가능
		getVideoID(currentCourse.music);
	}, [currentCourse]);
	const getVideoID = (query) => {
		SearchYoutube(query)
			.then((res) => {
				//console.log(res);
				return res.data;
			})
			.then((data) => {
				console.log("yt title: ", data.items[0].snippet.title);
				setVideoID(data.items[0].id.videoId);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Wrapper>
			<TopBar title="코스 상세" logo={false} back={true} />
			<Container>
				<MapPreviewDiv>
					{currentCourse.path && (
						<PathtoMap
							path={currentCourse.path}
							isLatLng={false}
							isStatic={false}
						/>
					)}
				</MapPreviewDiv>
				<SectionFlex>
					<SectionTitle>🕙 소요 시간</SectionTitle>
					<Text style={{ marginTop: "10px" }}>
						{currentCourse.totalTime <= 60
							? `약 ${currentCourse.totalTime}분`
							: `약 ${parseInt(currentCourse.totalTime / 60)}시간 ${
									currentCourse.totalTime % 60
							  }분`}
					</Text>
				</SectionFlex>
				<SectionTitle>🛫 출발지</SectionTitle>
				<Text>{currentCourse.startDetail}</Text>
				<SectionTitle>🛬 목적지</SectionTitle>
				<Text>{currentCourse.endDetail}</Text>
				<SectionTitle>📝 상세 설명</SectionTitle>
				<Text>
					{currentCourse.description === null ? "-" : currentCourse.description}
				</Text>
				<SectionTitle>#️⃣ 무드 해시태그</SectionTitle>
				<div style={{ display: "inline-block" }}>
					<SelectBox>
						<div>#{currentCourse.hashtag}</div>
					</SelectBox>
				</div>
				<SectionTitle>💡 차량 조명</SectionTitle>
				<div className="inner">
					<ColorPreview
						style={{
							background: `linear-gradient(90deg, ${currentCourse.color1} 0%, ${currentCourse.color2} 100%)`,
						}}
					/>
				</div>
				<SectionTitle>💿 음악 플레이리스트</SectionTitle>
				<div className="inner">
					{videoID && (
						<Music
							id="ytplayer"
							type="text/html"
							width="320"
							height="185"
							src={`https://www.youtube.com/embed/${videoID}`}
							frameborder="0"
							allowfullscreen="allowfullscreen"
						/>
					)}
				</div>
				<DriveButton onClick={() => nav(`/course/${params.id}/driving`)}>
					<p>🚘</p>
				</DriveButton>
			</Container>
		</Wrapper>
	);
};

export default DetailCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	margin-top: 90px;
	margin-bottom: 130px;
	width: 85%;
	display: flex;
	flex-direction: column;
	position: relative;
	overflow-x: hidden !important;
	.inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin-bottom: 10px;
	}
`;

const MapPreviewDiv = styled.div`
	width: 100%;
	height: 330px;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	margin-bottom: 10px;
`;

const SectionFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SectionTitle = styled.div`
	font-family: "Pretendard";
	font-weight: 500;
	font-size: 18px;
	color: #000;
	margin: 25px 0 10px 5px;
`;

const SelectBox = styled.div`
	display: inline-block;
	height: 40px;
	background-color: #eaeaea;
	border-radius: 20px;
	padding: 0 25px;
	margin-top: 8px;
	div {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
		color: #000;
		background-color: transparent;
	}
`;

const Text = styled.div`
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #000;
`;

const ColorPreview = styled.div`
	width: 95%;
	height: 40px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	margin: 10px 0;
`;

const Music = styled.iframe``;

const DriveButton = styled.div`
	position: fixed;
	z-index: 1000;
	width: 70px;
	height: 70px;
	right: 30px;
	bottom: 120px;
	background-color: #ffffff;
	border: 3px solid #e92b25;
	border-radius: 50%;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 40px;
	}
`;
