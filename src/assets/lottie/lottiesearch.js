import React from "react";
import Lottie from "react-lottie";
import animationData from "./search.json";

export default function search() {
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
			width={350}
			height={200}
			style={{ position: "absolute" }}
		/>
	);
}
