import axios from 'axios';


const API_KEY = "082d446528428dff708372150ca3dd58";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const DEFAULT_COUNTRY = "in";
const DEFAULT_CITY = "Noida";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(cityCountry = `${DEFAULT_CITY}, ${DEFAULT_COUNTRY}`) {
    return (dispatch, getState) => {
        let country = DEFAULT_COUNTRY;
        const cityWithCountry = cityCountry.split(",");

        if (cityWithCountry.length === 2) {
            country = cityWithCountry[1];
        }

        let city = cityCountry.split(",")[0];

        if (getState().weather[city]) {
            return;
        }


        const url = `${ROOT_URL}&q=${city}, ${country}`;
        axios.get(url).then((response) => {
            const cityData = response.data;
            let temps = [];
            let pressures = [];
            let humidities = [];
            cityData.list.forEach(weather => {
                temps.push(weather.main.temp);
                pressures.push(weather.main.pressure);
                humidities.push(weather.main.humidity);
            });
            const {name} = cityData.city;
            const data = {[name]: {name, temps, pressures, humidities}};

            dispatch(getWeather(data));
        }).catch((err) => {
            console.log(err);
            return;
        });

        //alternative
        // dispatch((() => {
        //     return {type: FETCH_WEATHER, payload}
        // })());

        //Ideal way to do it.
        // dispatch(getWeather(weatherData));
    };
}

function getWeather(payload) {
    return {
        type: FETCH_WEATHER,
        payload
    }
}
