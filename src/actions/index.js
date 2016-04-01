import axios from 'axios';


const API_KEY = '072df5ee8e2deb7041c6b02409370a64';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	//full API url
	const url = `${ROOT_URL}&q=${city},us`;

	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}