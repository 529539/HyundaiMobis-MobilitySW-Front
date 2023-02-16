import React from "react";
import Lottie from "react-lottie";
import animationData from "./history.json";

export default function lottiehistory() {
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
			width={250}
			height={200}
			style={{ position: "absolute", opacity: "0.5" }}
		/>
	);
}
