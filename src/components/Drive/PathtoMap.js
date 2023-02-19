import { useEffect, useRef } from "react";

const PathtoMap = () => {
	const mapElement = useRef(null);
	var polylinePath = [new window.naver.maps.LatLng(37.4526437, 126.49236)];
	useEffect(() => {
		const { naver } = window;
		const location = new naver.maps.LatLng(37.5656, 126.8869);
		const map = new naver.maps.Map(mapElement.current, {
			zoom: 10,
			center: location,
			zoomControl: true,
		});
		var polyline = new naver.maps.Polyline({
			path: polylinePath,
			strokeColor: "#FF0000",
			strokeOpacity: 0.8,
			strokeWeight: 5,
			map: map,
		});
		var marker = new naver.maps.Marker({
			position: polylinePath[polylinePath.length - 1],
			map: map,
		});
	}, []);

	return (
		<>
			<div
				ref={mapElement}
				className="map"
				style={{ width: "100%", height: "600px" }}
			/>
		</>
	);
};

export default PathtoMap;
