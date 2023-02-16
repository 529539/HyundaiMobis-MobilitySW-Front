import React from "react";
import Lottie from "react-lottie";
import animationData from "./save.json";

export default function lottiesave() {
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
			width={260}
			height={200}
			style={{ position: "absolute" }}
		/>
	);
}
