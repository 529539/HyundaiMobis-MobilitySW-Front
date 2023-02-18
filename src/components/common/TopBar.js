import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/arrow.svg";
import logoimg from "../../assets/logo.svg";

const TopBar = (props) => {
	const nav = useNavigate();
	const { title, logo, back, navTo } = props;
	return (
		<>
			<TopBarDiv>
				{back ? (
					<img
						src={arrow}
						className="arrow"
						onClick={navTo ? () => navTo(true) : () => nav(-1)}
					/>
				) : null}
				{logo ? (
					<div className="logo-container">
						<img src={logoimg} className="logo" />
					</div>
				) : null}
				<p className="title">{title}</p>
			</TopBarDiv>
		</>
	);
};

export default TopBar;

const TopBarDiv = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 60px;
	display: flex;
	border-bottom: 1px solid #eaeaea;
	background-color: #fff;
	z-index: 1000;
	.arrow {
		padding: 20px;
		position: absolute;
	}
	.title {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 20px;
		line-height: 60px;
		width: 100%;
		text-align: center;
	}
	.logo-container {
		position: absolute;
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
