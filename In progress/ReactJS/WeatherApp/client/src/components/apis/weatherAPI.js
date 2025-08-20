import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const instance = axios.create({
    baseURL: BASE_URL
});

//Get weather data
export const getWeatherData = async (city) => {
    if (city) {
        try {
            console.log('Fetching res with PARAM!');
            const res = await instance.get(`/weather?city=${city}`);
            console.log('Res fetched, now returning data!');
            return res.data;
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    } else {
        try {
            console.log('Fetching res without param!');
            const res = await instance.get(`/weather`);
            console.log('Res fetched, now returning data!');
            return res.data;
        } catch (error) {
            console.error('Error fetching data: ', error);
        }

    }
}