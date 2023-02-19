import React, { useCallback } from "react";
import styled from "styled-components";
import { SliderPicker } from "react-color";

const ColorPicker = (props) => {
	const { pickColor, setPickColor } = props;
	const handleColorChange = useCallback(
		(pickColor) => {
			setPickColor(pickColor.hex);
		},
		[pickColor]
	);
	return (
		<Wrapper>
			<SliderPicker
				color={pickColor}
				onChange={(pickColor) => handleColorChange(pickColor)}
			/>
		</Wrapper>
	);
};

export default ColorPicker;

const Wrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	.slider-picker {
		height: 75px !important;
	}
	.slider-picker * {
		overflow-y: hidden;
	}
	.slider-picker > div {
		height: 30px !important;
	}
	.slider-picker > div > div {
		height: 20px !important;
		margin-top: 5px !important;
	}
	.hue-horizontal {
		padding: 0 5px !important;
	}
	.hue-horizontal > div {
		z-index: 500;
		overflow: visible !important;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hue-horizontal > div > div {
		z-index: 1000;
		width: 5px !important;
		height: 20px !important;
		border-radius: 2px !important;
		box-shadow: inset rgb(0 0 0 / 30%) 0px 1px 1px 0px !important;
		box-shadow: rgb(0 0 0 / 60%) 0px 1px 3px 0px !important;
		margin-top: 1px !important;
	}
`;
