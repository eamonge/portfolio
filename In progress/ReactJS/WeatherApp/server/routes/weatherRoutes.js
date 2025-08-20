const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {

        // Uses city param from query
        const city = req.query.city;
        const apiKey = process.env.API_KEY_GEO;

        let weatherUrl;

        if (city) {
            //if city is provided, query OpenWeather by city name
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
        } else {
            //Fallback to IP geolocation
            //Get user's IP address
            let clientIP =
                req.headers['x-forwarded-for']?.split(',')[0] || // first IP in case of proxies
                req.socket.remoteAddress;

            if (clientIP === '::1' || clientIP === '127.0.0.1') {
                clientIP = '8.8.8.8';
            }

            // Lookup geolocaiton based on IP address
            const geoRes = await axios.get(`http://ip-api.com/json/${clientIP}`);
            const geoData = geoRes.data;

            if (geoData.status !== 'success') {
                return res.status(400).json({ error: 'Unable to determine location' });
            }

            // Use lat and long to get weather
            weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&appid=${apiKey}`;

            // res.json(weatherRes.data);
        }
        const weatherRes = await axios.get(weatherUrl);

        // Return JSON response
        res.json({
            location: weatherRes.data.name,
            temperature: weatherRes.data.main.temp,
            condition: weatherRes.data.weather[0].description,
            minimum: weatherRes.data.main.temp_min,
            maximum: weatherRes.data.main.temp_max,
            humidity: weatherRes.data.main.humidity,
            country: weatherRes.data.sys.country,
            icon: weatherRes.data.weather[0].icon,
            feels: weatherRes.data.main.feels_like,
            wind: weatherRes.data.wind.speed,
            humidity: weatherRes.data.main.humidity,
            pressure: weatherRes.data.main.pressure
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching weather data' })
    }
})

module.exports = router;