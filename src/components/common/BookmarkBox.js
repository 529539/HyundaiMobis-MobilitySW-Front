import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PathtoMap from "../Drive/PathtoMap";
import fillbookmark from "../../assets/fillbookmark.svg";
import strokebookmark from "../../assets/strokebookmark.svg";

const BookmarkBox = (props) => {
	const { course, isScraped, Scrap, UnScrap } = props;
	const [src, setSrc] = useState(isScraped ? fillbookmark : strokebookmark);
	const nav = useNavigate();
	return (
		<Wrapper>
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
					<div>
						🕙{" "}
						{course.totalTime <= 60
							? `약 ${course.totalTime}분`
							: `약 ${parseInt(course.totalTime / 60)}시간 ${
									course.totalTime % 60
							  }분`}
					</div>
					<div>🛫 {course.startDetail}</div>
					<div>🛬 {course.endDetail}</div>
					<div>#️⃣ #{course.hashtag}</div>
				</TextDiv>
			</Box>
			<BookmarkDiv
				onClick={
					isScraped
						? () => {
								UnScrap(course.courseId);
								setSrc(strokebookmark);
						  }
						: () => {
								Scrap(course.courseId);
								setSrc(fillbookmark);
						  }
				}
			>
				<div>{course.scrap}</div>
				<img src={src} />
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
	height: 200px;
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
	z-index: 500;
`;
