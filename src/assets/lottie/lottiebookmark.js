import React from "react";
import Lottie from "react-lottie";
import animationData from "./bookmark.json";

export default function lottiebookmark() {
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
			width={230}
			height={200}
			style={{ position: "absolute", opacity: "0.8" }}
		/>
	);
}
