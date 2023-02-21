import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import DeleteBox from "../common/DeleteBox";
import { GetDrivedCourse } from "../../api/archive";

const DrivedCourseMenu = () => {
	const [array, setArray] = useState([]);
	const getArray = () => {
		GetDrivedCourse(1)
			.then((res) => {
				console.log(res.data);
				setArray(res.data.data);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getArray();
	}, []);
	return (
		<Wrapper>
			<TopBar title="나의 주행 기록" logo={false} back={true} />
			<Container>
				<div className="recom">오래된순</div>
				{array.map((course) => {
					return (
						<DeleteBox
							course={course}
							key={course.courseId}
							isDeleteAble={false}
						/>
					);
				})}
			</Container>
		</Wrapper>
	);
};

export default DrivedCourseMenu;

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
