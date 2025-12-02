import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Thermometer } from 'lucide-react';
import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
    if (!data) return null;

    const { name, main, weather, wind, sys } = data;
    const condition = weather[0].main;
    const description = weather[0].description;

    const getWeatherIcon = (condition) => {
        switch (condition.toLowerCase()) {
            case 'clouds': return <Cloud size={64} />;
            case 'rain': return <CloudRain size={64} />;
            case 'clear': return <Sun size={64} />;
            default: return <Sun size={64} />;
        }
    };

    return (
        <div className="current-weather glass-panel">
            <div className="header">
                <div>
                    <h2>{name}, {sys.country}</h2>
                    <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="icon-wrapper">
                    {getWeatherIcon(condition)}
                    <span className="condition">{condition}</span>
                </div>
            </div>

            <div className="temp-container">
                <h1 className="temp">{Math.round(main.temp)}°</h1>
                <p className="description">{description}</p>
            </div>

            <div className="details">
                <div className="detail-item">
                    <Droplets size={20} />
                    <span>Humidity</span>
                    <strong>{main.humidity}%</strong>
                </div>
                <div className="detail-item">
                    <Wind size={20} />
                    <span>Wind</span>
                    <strong>{wind.speed} m/s</strong>
                </div>
                <div className="detail-item">
                    <Thermometer size={20} />
                    <span>Pressure</span>
                    <strong>{main.pressure} hPa</strong>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
