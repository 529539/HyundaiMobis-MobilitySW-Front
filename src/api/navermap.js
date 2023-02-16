import axios from "axios";

const drivingUrl = "/api/map-direction-15/v1/driving";
const start = "126.9139,37.5495";
const goal = "126.9457,37.5592";
const waypoints = "126.9237,37.5568|126.9469,37.562";

export async function driving() {
	const response = await axios
		.get(`${drivingUrl}?start=${start}&goal=${goal}&waypoints=${waypoints}`, {
			headers: {
				"X-NCP-APIGW-API-KEY-ID": `${process.env.REACT_APP_NCP_CLIENT_ID}`,
				"X-NCP-APIGW-API-KEY": `${process.env.REACT_APP_NCP_CLIENT_SECRET}`,
			},
		})
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.then((data) => {
			console.log("data : ", data);
		})
		.catch((err) => console.log(err));
	return response;
}
