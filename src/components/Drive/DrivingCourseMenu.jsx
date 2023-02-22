import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import { GetCourse } from "../../api/course";
import { PostDrive, PatchDrive } from "../../api/course";
import PathtoMap from "./PathtoMap";

const DrivingCourseMenu = () => {
	const nav = useNavigate();
	const params = useParams();
	const [currentCourse, setCurrentCourse] = useState({});
	const [isStart, setIsStart] = useState(false);
	const [driveId, setDriveId] = useState(null);
	useEffect(() => {
		GetCourse(params.id)
			.then((res) => {
				console.log(res.data);
				setCurrentCourse(res.data.data[0]);
			})
			.catch((err) => console.log(err));
	}, []);
	const startDrive = () => {
		setIsStart(true);
		PostDrive(currentCourse.courseId)
			.then((res) => {
				console.log(res);
				setDriveId(res.data.data.id);
			})
			.catch((err) => console.log(err));
	};
	const endDrive = () => {
		PatchDrive(driveId)
			.then((res) => {
				console.log(res);
				nav("/drived");
			})
			.catch((err) => console.log(err));
	};
	return (
		<Wrapper>
			<TopBar text="" logo={true} back={false} />
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
				<ButtonDiv
					onClick={isStart ? () => endDrive() : () => startDrive()}
					style={{ backgroundColor: isStart ? "#E92B25" : "#263F81" }}
				>
					<div className="circle">
						{isStart ? <div className="rect" /> : <div className="tri" />}
					</div>
					<div className="text">주행 {isStart ? "종료" : "시작"}</div>
				</ButtonDiv>
			</Container>
		</Wrapper>
	);
};

export default DrivingCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	height: 400px;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	margin-bottom: 10px;
`;

const ButtonDiv = styled.div`
	width: 100%;
	height: 100px;
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.circle {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 3px solid #ffffff;
		margin-bottom: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rect {
		width: 11px;
		height: 11px;
		background-color: #fff;
	}
	.tri {
		width: 0;
		height: 0;
		border-bottom: 7px solid transparent;
		border-top: 7px solid transparent;
		border-left: 12px solid #fff;
		border-right: 12px solid transparent;
		margin-left: 15px;
	}
	.text {
		font-family: "Pretendard";
		font-weight: 500;
		font-size: 20px;
		color: #fff;
	}
`;
