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
			width={280}
			height={200}
			style={{ position: "absolute" }}
		/>
	);
}
