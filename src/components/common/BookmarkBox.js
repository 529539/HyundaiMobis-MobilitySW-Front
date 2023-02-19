import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import testmappreview from "../../assets/testmappreview.svg";
import fillbookmark from "../../assets/fillbookmark.svg";
import strokebookmark from "../../assets/strokebookmark.svg";

const BookmarkBox = (props) => {
	const { course, isMy } = props;
	const nav = useNavigate();
	//courseId로 사진 조회
	const [timeText, setTimeText] = useState("");
	const timeRevert = (time) => {
		if (time <= 60) setTimeText(`약 ${time}분`);
		else {
			var h = parseInt(time / 60);
			var m = time % 60;
			setTimeText(`약 ${h}시간 ${m}분`);
		}
	};
	useEffect(() => {
		timeRevert(course.totalTime);
	}, [course]);
	return (
		<Wrapper>
			<Box onClick={() => nav(`/course/${course.courseId}`)}>
				<MapPreviewDiv>
					<MapPreview src={testmappreview} />
				</MapPreviewDiv>
				<TextDiv>
					<div>🕙 {timeText}</div>
					<div>🛫 {course.startDetail}</div>
					<div>🛬 {course.endDetail}</div>
					<div>#️⃣ #{course.hashtag}</div>
				</TextDiv>
			</Box>
			<BookmarkDiv
				onClick={() =>
					console.log(
						isMy ? `UnLike(${course.courseId})` : `Like(${course.courseId})`
					)
				}
			>
				<div>{course.scrap}</div>
				<img src={isMy ? fillbookmark : strokebookmark} />
			</BookmarkDiv>
		</Wrapper>
	);
};

export default BookmarkBox;

const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 20px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Box = styled.div`
	width: 95%;
	height: 190px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	margin: 6px;
	display: flex;
	align-items: center;
	position: relative;
	z-index: 1;
`;

const MapPreviewDiv = styled.div`
	width: 205px;
	height: 170px;
	box-shadow: inset 1px 2px 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	z-index: 2;
	margin: 0 10px;
`;

const MapPreview = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: relative;
	z-index: 0;
`;

const TextDiv = styled.div`
	width: 185px;
	height: 90%;
	margin-right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	div {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 13px;
		margin: 5px 0;
		word-break: keep-all;
	}
`;

const BookmarkDiv = styled.div`
	width: 45px;
	height: 40px;
	position: absolute;
	top: 0;
	right: 17px;
	display: flex;
	div {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 12px;
		color: #727272;
		margin: 15px 6px 0 0;
	}
	img {
		width: 20px;
	}
	z-index: 1000;
`;
