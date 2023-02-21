import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import BookmarkBox from "../common/BookmarkBox";
import {
	GetBookmarkCourse,
	PostBookmarkCourse,
	DeleteBookmarkCourse,
} from "../../api/archive";
import fillbookmark from "../../assets/fillbookmark.svg";
import strokebookmark from "../../assets/strokebookmark.svg";

const CourseBookmarkMenu = () => {
	const [array, setArray] = useState([]);
	const getArray = () => {
		GetBookmarkCourse(1)
			.then((res) => {
				console.log(res.data);
				setArray(res.data.data);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getArray();
	}, []);
	const Scrap = (courseId) => {
		PostBookmarkCourse(courseId)
			.then((res) => {
				console.log(res);
				getArray();
			})
			.catch((err) => console.log(err));
	};
	const UnScrap = (courseId) => {
		DeleteBookmarkCourse(courseId)
			.then((res) => {
				console.log(res);
				getArray();
			})
			.catch((err) => console.log(err));
	};
	return (
		<Wrapper>
			<TopBar title="내가 즐겨찾기한 코스" logo={false} back={true} />
			<Container>
				<div className="recom">오래된순</div>
				{array.map((course) => {
					return (
						<BookmarkBox
							course={course}
							key={course.courseId}
							isMy={true}
							Scrap={Scrap}
							UnScrap={UnScrap}
						/>
					);
				})}
			</Container>
		</Wrapper>
	);
};

export default CourseBookmarkMenu;

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
	align-items: center;
	position: relative;
	.recom {
		width: 100%;
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 13px;
		text-align: right;
		color: #727272;
		margin: 0 22px 10px 0;
	}
`;
