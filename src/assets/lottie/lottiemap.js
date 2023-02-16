import React from "react";
import Lottie from "react-lottie";
import animationData from "./map.json";

export default function lottiemap() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Lottie
			options={defaultOptions}
			width={300}
			height={220}
			style={{ position: "absolute" }}
		/>
	);
}
