import { IForecastCard, IWeatherCard } from '../interfaces/card-data';
import { IForecast } from '../interfaces/forecast-data';
import { RootWeatherData } from '../interfaces/weather-data';

export const groupByDate = (arr: IForecast[]): IForecast[][] => {
    const groups: any = {};
    arr.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(item);
    });
    return Object.values(groups);
};

export const createWeatherCard = (data: RootWeatherData): IWeatherCard => {
    return {
        country: data.sys.country,
        city: data.name,
        temp: Math.round(data.main.temp),
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max),
        tempName: data.weather[0].main,
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windSpeed: Math.round(data.wind.speed),
        windDirection: data.wind.deg,
    };
};

export const createForecastCard = (data: IForecast): IForecastCard => {
    return {
        date: data.dt,
        temp: data.main.temp,
        feelsLikeTemp: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
        tempName: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
    };
};
