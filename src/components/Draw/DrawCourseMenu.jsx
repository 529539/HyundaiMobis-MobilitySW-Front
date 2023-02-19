import React, { useEffect } from "react";
import styled from "styled-components";
import TopBar from "../common/TopBar";

const DrawCourseMenu = (props) => {
	const { drawpath, setDrawpath, setIsDrawing } = props;
	useEffect(() => {
		setDrawpath([]);
		const mapDiv = document.getElementById("map");
		const mapOptions = {
			center: new window.naver.maps.LatLng(37.5178, 127.0247),
			zoom: 14,
			zoomControl: true,
			zoomControlOptions: {
				style: window.naver.maps.ZoomControlStyle.SMALL,
				position: window.naver.maps.Position.LEFT,
			},
		};
		const map = new window.naver.maps.Map(mapDiv, mapOptions);
		var polyline = new window.naver.maps.Polyline({
			map: map,
			path: [],
			strokeColor: "#4F94F5",
			strokeWeight: 5,
		});
		window.naver.maps.Event.addListener(map, "click", function (e) {
			var point = e.coord;
			var path = polyline.getPath();
			path.push(point);
			new window.naver.maps.Marker({
				map: map,
				position: path._array[0],
			});
			setDrawpath(path._array);
		});
	}, []);
	useEffect(() => {
		console.log("drawpath", drawpath);
	});
	return (
		<>
			<Wrapper>
				<TopBar title="코스 직접 그리기" logo={false} back={true} />
				<Container>
					<div id="map" style={{ width: "100%", height: "100%" }} />
					<ButtonBox
						onClick={drawpath.length === 0 ? null : () => setIsDrawing(false)}
					>
						<p>그리기 완료하기</p>
					</ButtonBox>
				</Container>
			</Wrapper>
		</>
	);
};

export default DrawCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	margin-top: 60px;
	width: 100%;
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const ButtonBox = styled.div`
	position: absolute;
	top: 30px;
	width: 150px;
	height: 40px;
	border: 2px solid #e92b25;
	background-color: #fff;
	border-radius: 21px;
	p {
		font-family: "Pretendard";
		font-weight: 500;
		font-size: 18px;
		line-height: 40px;
		text-align: center;
		color: #e92b25;
	}
`;
