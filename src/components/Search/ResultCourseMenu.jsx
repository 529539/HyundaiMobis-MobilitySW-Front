import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../common/TopBar";
import { GoSearch } from "react-icons/go";
import BookmarkBox from "../common/BookmarkBox";
import { SearchCourse } from "../../api/course";
import {
	GetBookmarkCourse,
	PostBookmarkCourse,
	DeleteBookmarkCourse,
} from "../../api/archive";

const ResultCourseMenu = (props) => {
	const nav = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const [time, setTime] = useState(0);
	const [departures, setDepartures] = useState("null");
	const [arrivals, setArrivals] = useState("null");
	const [hashtag, setHashtag] = useState("null");
	const [array, setArray] = useState([]);
	const [scrapedId, setScrapedId] = useState([]);
	useEffect(() => {
		window.scrollTo(0, 0);
		setTime(searchParams.get("time"));
		setDepartures(searchParams.get("departures"));
		setArrivals(searchParams.get("arrivals"));
		setHashtag(searchParams.get("hashtag"));
	}, []);
	const [timeText, setTimeText] = useState("");
	const timeRevert = (time) => {
		if (time <= 60) setTimeText(`약 ${time}분`);
		else {
			var h = parseInt(time / 60);
			var m = time % 60;
			setTimeText(`약 ${h}시간 ${m}분`);
		}
	};
	const getArray = () => {
		SearchCourse(Number(time), departures)
			.then((res) => {
				console.log(res.data);
				setArray(res.data.data);
			})
			.catch((err) => console.log(err));
		GetBookmarkCourse(1)
			.then((res) => {
				console.log(res.data);
				console.log(res.data.data.map((c) => c.courseId));
				setScrapedId(res.data.data.map((c) => c.courseId));
				console.log("scrapedId", scrapedId);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		timeRevert(time);
		getArray();
	}, [time]);
	const Scrap = (courseId) => {
		PostBookmarkCourse(courseId)
			.then((res) => {
				console.log(res);
				getArray();
			})
			.catch((err) => console.log(err));
	};
	const UnScrap = (courseId) => {
		// DeleteBookmarkCourse(courseId)
		// 	.then((res) => {
		// 		console.log(res);
		// 		getArray();
		// 	})
		// 	.catch((err) => console.log(err));
		setScrapedId(scrapedId.filter((id) => id !== courseId));
	};
	return (
		<Wrapper>
			<TopBar title="검색 결과" logo={false} back={true} />
			<Container>
				<div
					style={{ width: "95%", position: "relative", marginBottom: "20px" }}
				>
					<SearchBox>
						<div className="icon-container">
							<GoSearch fill="#727272" />
						</div>
						<div>
							{timeText}
							{departures === "null" ? "" : `, 출발지: ${departures}`}
							{arrivals === "null" ? "" : `, 목적지: ${arrivals}`}
							{hashtag === "null" ? "" : `, #${hashtag}`}
						</div>
					</SearchBox>
					<div className="recom">정렬: 즐겨찾기 수</div>
				</div>
				{scrapedId &&
					array.map((course) => {
						return (
							<BookmarkBox
								course={course}
								key={course.courseId}
								isScraped={scrapedId.includes(course.courseId)}
								Scrap={Scrap}
								UnScrap={UnScrap}
							/>
						);
					})}
			</Container>
		</Wrapper>
	);
};

export default ResultCourseMenu;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	margin-top: 90px;
	padding-bottom: 100px;
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	.recom {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 13px;
		text-align: right;
		color: #727272;
		margin-right: 7px;
	}
`;

const SearchBox = styled.div`
	width: 95%;
	min-height: 40px;
	border: 1px solid #eaeaea;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	margin-bottom: 8px;
	padding-right: 7px;
	.icon-container {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 2px;
	}
	div {
		font-family: "Pretendard";
		font-weight: 400;
		font-size: 15px;
		line-height: 18px;
		word-break: keep-all;
		margin: 7px 0;
	}
`;
