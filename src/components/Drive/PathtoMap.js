import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const PathtoMap = (props) => {
	const { path, isLatLng, isStatic, isSmall } = props;
	const mapElement = useRef(null);
	const [polylinePath, setPolylinePath] = useState([]);
	useEffect(() => {
		console.log("PathtoMap props array", path);
		setPolylinePath([]);
		if (isLatLng) {
			setPolylinePath(path);
		} else {
			path.map((p) => {
				setPolylinePath((polyline) => [
					...polyline,
					new window.naver.maps.LatLng(p[1], p[0]),
				]);
			});
		}
	}, []);
	useEffect(() => {
		console.log(polylinePath);
		draw();
	}, [polylinePath]);
	const draw = () => {
		const { naver } = window;
		var newBounds = new window.naver.maps.LatLngBounds(null, null);
		polylinePath.map((ll) => {
			newBounds.extend(ll);
		});
		const map = new naver.maps.Map(mapElement.current, {
			bounds: newBounds,
			draggable: isStatic ? false : true,
			pinchZoom: isStatic ? false : true,
			scrollWheel: isStatic ? false : true,
			keyboardShortcuts: isStatic ? false : true,
			disableDoubleTapZoom: isStatic ? true : false,
			disableDoubleClickZoom: isStatic ? true : false,
			disableTwoFingerTapZoom: isStatic ? true : false,
			zoomControl: isStatic ? false : true,
			zoomControlOptions: isStatic
				? null
				: {
						style: window.naver.maps.ZoomControlStyle.SMALL,
						position: window.naver.maps.Position.LEFT,
				  },
		});
		var polyline = new naver.maps.Polyline({
			path: polylinePath,
			strokeColor: "#E92B25",
			strokeWeight: isSmall ? 3 : 5,
			map: map,
		});
		var sMarkerOptions = {
			position: polylinePath[0],
			map: map,
			icon: {
				url: "/img/startmarker.svg",
				size: new window.naver.maps.Size(30, 45),
				origin: new window.naver.maps.Point(0, 0),
				anchor: new window.naver.maps.Point(15, 40),
			},
		};
		var fMarkerOptions = {
			position: polylinePath[polylinePath.length - 1],
			map: map,
			icon: {
				url: "/img/finishmarker.svg",
				size: new window.naver.maps.Size(30, 45),
				origin: new window.naver.maps.Point(0, 0),
				anchor: new window.naver.maps.Point(15, 40),
			},
		};
		if (!isSmall) {
			new window.naver.maps.Marker(sMarkerOptions);
			new window.naver.maps.Marker(fMarkerOptions);
		}
	};

	return (
		<Wrapper>
			<div
				ref={mapElement}
				className="map"
				style={{ width: "100%", height: "100%" }}
			/>
		</Wrapper>
	);
};

export default PathtoMap;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: relative;
`;
