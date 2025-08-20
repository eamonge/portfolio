import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { getWeatherData } from '../apis/weatherAPI';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CompressIcon from '@mui/icons-material/Compress';
import '../styles/infoDisplay.css';
import { useSelector } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
    overflow: 'scroll',
    boxShadow: 'none',
}));

const InfoDisplay = () => {
    const query = useSelector((state) => state.search.query);
    const [weatherData, setWeatherData] = useState(null);

    const handleFetchWeather = async () => {
        try {
            const data = await getWeatherData(query);
            console.log("Data received in frontend:", data);
            setWeatherData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (query !== null) {
                handleFetchWeather();
                console.log('handleFetchWeather called');
            }
        }, 500);
    }, [query]);

    return (
        <div className='contentBody'>
            <h4>Current Weather</h4>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={3}>
                        {
                            weatherData ? (
                                <Item>
                                    {/* <h5>{weatherData.location}</h5> */}
                                    <h6 className='titleH6'>{weatherData.location}</h6>
                                    <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt='weather icon' />
                                    <h6 className='bottomH6'>{weatherData.condition}</h6>
                                    <h6 className='bottomH6'>{Math.ceil(weatherData.temperature)}°C</h6>
                                </Item>
                            ) : "No data"
                        }
                    </Grid>
                    <Grid size={9}>
                        <Item>
                            {
                                weatherData ? (
                                    <>
                                        <h2>Feels like: {Math.ceil(weatherData.feels)}°C</h2>
                                        <h4>
                                            <KeyboardArrowUpIcon /> {Math.ceil(weatherData.maximum)}
                                            <KeyboardArrowDownIcon /> {Math.ceil(weatherData.minimum)}
                                        </h4>
                                        <div className="textContainer">
                                            <span>
                                                <WaterDropIcon className='material-icons' />
                                            </span>
                                            <span><h5>Humidity</h5></span>
                                        </div>
                                        <br />
                                        <div className="textContainer">
                                            <span>
                                                <AirIcon className='material-icons' />
                                            </span>
                                            <span><h5> Wind</h5></span>
                                        </div>
                                        <br />
                                        <div className="textContainer">
                                            <span>
                                                <CompressIcon className='material-icons' />
                                            </span>
                                            <span><h5>Pressure</h5></span>
                                        </div>
                                    </>
                                ) : (
                                    <p>Loading...</p>
                                )
                            }
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default InfoDisplay