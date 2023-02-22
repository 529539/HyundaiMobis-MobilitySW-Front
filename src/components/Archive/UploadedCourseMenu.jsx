import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import DeleteBox from "../common/DeleteBox";
import { GetUploadedCourse, DeleteUploadedCourse } from "../../api/archive";

const UploadedCourseMenu = () => {
	const [array, setArray] = useState([]);
	const getArray = () => {
		GetUploadedCourse(1)
			.then((res) => {
				console.log(res);
				setArray(res.data.data);
			})
			.catch((err) => console.log(err));
	};
	const Delete = (courseId) => {
		DeleteUploadedCourse(courseId)
			.then((res) => {
				console.log(res);
				getArray();
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getArray();
	}, []);
	return (
		<Wrapper>
			<TopBar title="내가 등록한 코스" logo={false} back={true} />
			<Container>
				<div className="recom">오래된순</div>
				{array.map((course) => {
					return (
						<DeleteBox
							course={course}
							key={course.courseId}
							isDeleteAble={true}
							Delete={Delete}
						/>
					);
				})}
			</Container>
		</Wrapper>
	);
};

export default UploadedCourseMenu;

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
