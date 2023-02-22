import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import ColorPicker from "./ColorPicker";
import PathtoMap from "../Drive/PathtoMap";
import { timearray, hashtagarray } from "../Search/searchlist";
import { GetAddress } from "../../api/navermap";
import { PostCourse } from "../../api/course";

const PostCourseMenu = (props) => {
	const nav = useNavigate();
	const { drawpath, setIsDrawing } = props;
	const [time, setTime] = useState(0);
	const [departures, setDepartures] = useState("");
	const [arrivals, setArrivals] = useState("");
	const [departuresLoc, setDeparturesLoc] = useState("");
	const [arrivalsLoc, setArrivalsLoc] = useState("");
	const [description, setDescription] = useState("");
	const [hashtag, setHashtag] = useState("");
	const [color1, setColor1] = useState("#E92B25");
	const [color2, setColor2] = useState("#263F81");
	const [pickColor1, setPickColor1] = useState("#E92B25");
	const [pickColor2, setPickColor2] = useState("#263F81");
	const [openColor1, setOpenColor1] = useState(false);
	const [openColor2, setOpenColor2] = useState(false);
	const [music, setMusic] = useState("");
	const onChangeDescriptionInput = useCallback(
		(e) => {
			setDescription(e.target.value);
		},
		[description]
	);
	const onChangeMusicInput = useCallback(
		(e) => {
			setMusic(e.target.value);
		},
		[music]
	);

	useEffect(() => {
		GetAddress(`${drawpath[0].x},${drawpath[0].y}`)
			.then((res) => {
				console.log(res);
				return res.data;
			})
			.then((data) => {
				if (data.status.code === 3)
					setDepartures(
						"주소가 정상적으로 반환되지 않았습니다. 다시 시도해주세요."
					);
				else {
					//console.log(data.results[0]);
					setDepartures(
						`${data.results[0].region.area1.name} ${data.results[0].region.area2.name} ${data.results[0].region.area3.name} ${data.results[0].land.name} ${data.results[0].land.number1} ${data.results[0].land.addition0.value} (우) ${data.results[0].land.addition1.value}`
					);
					setDeparturesLoc(data.results[0].region.area2.name);
				}
			})
			.catch((err) => console.log(err));
		GetAddress(
			`${drawpath[drawpath.length - 1].x},${drawpath[drawpath.length - 1].y}`
		)
			.then((res) => {
				//console.log(res);
				return res.data;
			})
			.then((data) => {
				if (data.status.code === 3)
					setArrivals(
						"주소가 정상적으로 반환되지 않았습니다. 다시 시도해주세요."
					);
				else {
					//console.log(data.results[0]);
					setArrivals(
						`${data.results[0].region.area1.name} ${data.results[0].region.area2.name} ${data.results[0].region.area3.name} ${data.results[0].land.name} ${data.results[0].land.number1} ${data.results[0].land.addition0.value} (우) ${data.results[0].land.addition1.value}`
					);
					setArrivalsLoc(data.results[0].region.area2.name);
				}
			})
			.catch((err) => console.log(err));
	}, [drawpath]);

	const goPost = () => {
		console.log(
			"소요 시간: ",
			time,
			"배열: ",
			drawpath,
			"\n출발(구, 상세): ",
			departures,
			", ",
			departuresLoc,
			"\n도착(구, 상세): ",
			arrivals,
			", ",
			arrivalsLoc,
			"\n설명: ",
			description,
			"\n해시태그: ",
			hashtag,
			"\n조명: ",
			pickColor1,
			pickColor2,
			"\n음악: ",
			music
		);
		if (time === 0 || description === "" || hashtag === "" || music === "") {
			alert("모든 항목을 입력했는지 확인해주세요.");
		} else {
			PostCourse(
				description,
				departuresLoc,
				departures,
				arrivalsLoc,
				arrivals,
				hashtag,
				time,
				music,
				pickColor1,
				pickColor2,
				drawpath
			)
				.then((res) => {
					console.log(res);
					nav(`/course/${res.data.data.id}`);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	return (
		<Wrapper>
			<TopBar
				title="코스 등록하기"
				logo={false}
				back={true}
				navTo={setIsDrawing}
				bool={true}
			/>
			<Container>
				<div className="inner">
					<MapPreviewDiv>
						{drawpath && (
							<PathtoMap path={drawpath} isLatLng={true} isStatic={true} />
						)}
					</MapPreviewDiv>
				</div>
				<SectionTitle>🕙 소요 시간</SectionTitle>
				<SelectContainer>
					{timearray.map((t) => {
						return (
							<SelectBox
								key={t.num}
								onClick={() => setTime(t.num)}
								style={{ backgroundColor: time === t.num ? "#eaeaea" : "#fff" }}
							>
								<p>{t.text}</p>
							</SelectBox>
						);
					})}
				</SelectContainer>
				<SectionTitle>🛫 출발지</SectionTitle>
				<AddressText>{departures}</AddressText>
				<SectionTitle>🛬 목적지</SectionTitle>
				<AddressText>{arrivals}</AddressText>
				<SectionTitle>📝 상세 설명</SectionTitle>
				<div className="inner">
					<DescriptionInput
						maxLength={60}
						onChange={onChangeDescriptionInput}
						autoComplete="off"
						placeholder="60자 이하의 짧은 코스 설명을 입력하세요."
					/>
				</div>
				<SectionTitle>#️⃣ 무드 해시태그</SectionTitle>
				<SelectContainer>
					{hashtagarray.map((h) => {
						return (
							<SelectBox
								key={h}
								onClick={() => setHashtag(h)}
								style={{
									backgroundColor: hashtag === h ? "#eaeaea" : "#fff",
								}}
							>
								<p>#{h}</p>
							</SelectBox>
						);
					})}
				</SelectContainer>
				<SectionTitle>💡 차량 조명</SectionTitle>
				<div className="inner">
					<ColorPreview
						style={{
							background: `linear-gradient(90deg, ${pickColor1} 0%, ${pickColor2} 100%)`,
						}}
					/>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "95%",
						}}
					>
						<ColorCircle
							style={{ backgroundColor: `${pickColor1}` }}
							onClick={() => {
								setOpenColor2(false);
								setOpenColor1(true);
							}}
						/>
						<ColorCircle
							style={{ backgroundColor: `${pickColor2}` }}
							onClick={() => {
								setOpenColor1(false);
								setOpenColor2(true);
							}}
						/>
					</div>
				</div>
				{openColor1 ? (
					<ColorPicker pickColor={pickColor1} setPickColor={setPickColor1} />
				) : null}
				{openColor2 ? (
					<ColorPicker pickColor={pickColor2} setPickColor={setPickColor2} />
				) : null}
				<SectionTitle>💿 음악 플레이리스트</SectionTitle>
				<div className="inner">
					<MusicInput
						onChange={onChangeMusicInput}
						autoComplete="off"
						placeholder="유튜브 플레이리스트의 제목을 입력하세요."
					/>
				</div>
				<ButtonBox onClick={() => goPost()}>
					<p>코스 등록</p>
				</ButtonBox>
			</Container>
		</Wrapper>
	);
};

export default PostCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden !important;
`;

const Container = styled.div`
	margin-top: 90px;
	margin-bottom: 130px;
	width: 85%;
	display: flex;
	flex-direction: column;
	position: relative;
	overflow-x: hidden !important;
	.inner {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin-bottom: 10px;
	}
`;

const MapPreviewDiv = styled.div`
	width: 100%;
	height: 330px;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	margin-bottom: 10px;
`;

const SectionFlex = styled.div`
	display: flex;
	justify-content: space-between;
	.description {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 13px;
		text-align: right;
		color: #727272;
		width: 50%;
		margin-top: 30px;
	}
`;

const SectionTitle = styled.div`
	font-family: "Pretendard";
	font-weight: 500;
	font-size: 18px;
	color: #000;
	margin: 25px 0 10px 5px;
`;

const SelectContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const SelectBox = styled.div`
	min-width: 60px;
	height: 40px;
	border: 1px solid #eaeaea;
	border-radius: 20px;
	padding: 0 15px;
	margin: 0 10px 10px 0;
	p {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 16px;
		line-height: 40px;
		text-align: center;
		color: #000;
		background-color: transparent;
	}
`;

const AddressText = styled.div`
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: #000;
`;

const DescriptionInput = styled.textarea`
	width: 95%;
	height: 65px;
	border: 1px solid #eaeaea;
	border-radius: 5px;
	&:focus {
		outline: none;
	}
	resize: none;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;
	color: #000;
	margin-top: 5px;
	padding: 7px;
`;

const ColorPreview = styled.div`
	width: 95%;
	height: 40px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	margin: 10px 0;
`;

const ColorCircle = styled.div`
	width: 35px;
	height: 35px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	margin: 5px;
	border-radius: 50%;
`;

const MusicInput = styled.textarea`
	width: 95%;
	height: 23px;
	border: 1px solid #eaeaea;
	border-radius: 5px;
	&:focus {
		outline: none;
	}
	resize: none;
	font-family: "Pretendard";
	font-weight: 400;
	font-size: 15px;
	line-height: 23px;
	color: #000;
	margin-top: 5px;
	padding: 7px;
`;

const ButtonBox = styled.div`
	position: relative;
	margin: 0 auto;
	margin-top: 20px;
	width: 200px;
	height: 46px;
	border: 1px solid #e92b25;
	border-radius: 23px;
	p {
		font-family: "Pretendard";
		font-weight: 600;
		font-size: 20px;
		line-height: 46px;
		text-align: center;
		color: #e92b25;
	}
`;
