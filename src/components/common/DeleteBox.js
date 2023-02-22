import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PathtoMap from "../Drive/PathtoMap";
import { BiTrash } from "react-icons/bi";

const DeleteBox = (props) => {
	const { course, isDeleteAble, Delete } = props;
	const nav = useNavigate();
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
						? `${course.date} ${course.startTime} ~ ${course.endTime}`
						: `등록일: ${course.createdAt}`}
				</div>
			</UnderBox>
			<Box onClick={() => nav(`/course/${course.courseId}`)}>
				<MapPreviewDiv>
					{course.path && (
						<PathtoMap
							path={course.path}
							isLatLng={false}
							isStatic={true}
							isSmall={true}
						/>
					)}
				</MapPreviewDiv>
				<TextDiv>
					<div>🕙 {timeText}</div>
					<div>🛫 {course.startDetail}</div>
					<div>🛬 {course.endDetail}</div>
					<div>#️⃣ #{course.hashtag}</div>
				</TextDiv>
			</Box>
			{isDeleteAble ? (
				<DeleteDiv onClick={() => Delete(course.courseId)}>
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
		font-size: 12px;
		margin: 5px 0;
		word-break: keep-all;
		overflow-y: hidden;
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
	z-index: 500;
`;
