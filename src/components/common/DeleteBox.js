import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import testmappreview from "../../assets/testmappreview.svg";
import { BiTrash } from "react-icons/bi";
// api 받아오면 지우고 앞에 course. 붙이기
const date = "2023-02-13";
const startTime = "16:58:54";
const endTime = "17:19:46";
const createdAt = "2023-02-19";

const DeleteBox = (props) => {
	const { course, isDeleteAble } = props;
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
			<UnderBox>
				<div className="text">
					{!isDeleteAble
						? `${date} ${startTime} ~ ${endTime}`
						: `등록일: ${createdAt}`}
				</div>
			</UnderBox>
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
			{isDeleteAble ? (
				<DeleteDiv onClick={() => console.log(`Delete(${course.courseId})`)}>
					<BiTrash fill="#727272" size="20" />
				</DeleteDiv>
			) : null}
		</Wrapper>
	);
};

export default DeleteBox;

const Wrapper = styled.div`
	width: 100%;
	height: 230px;
	margin-bottom: 20px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UnderBox = styled.div`
	width: 95%;
	height: 220px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin: 6px;
	position: absolute;
	z-index: 1;
	.text {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 12px;
		color: #727272;
		margin: 7px 0 0 10px;
	}
`;

const Box = styled.div`
	width: 95%;
	height: 190px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	margin: 6px;
	margin-top: 32px;
	display: flex;
	align-items: center;
	position: relative;
	z-index: 2;
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

const DeleteDiv = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 40px;
	right: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;
