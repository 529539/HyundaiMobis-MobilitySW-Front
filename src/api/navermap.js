import axios from "axios";

const c2aUrl = "/api/map-reversegeocode/v2/gc";

const NaverMap = {
	c2a: (coords) =>
		axios.get(`${c2aUrl}?coords=${coords}&orders=roadaddr&output=json`, {
			headers: {
				"X-NCP-APIGW-API-KEY-ID": `${process.env.REACT_APP_NCP_CLIENT_ID}`,
				"X-NCP-APIGW-API-KEY": `${process.env.REACT_APP_NCP_CLIENT_SECRET}`,
			},
		}),
};

export const GetAddress = async (coords) => {
	try {
		const response = await NaverMap.c2a(coords);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
