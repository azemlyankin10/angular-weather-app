export interface IWeatherCard {
    country: string;
    city: string;
    temp: number;
    min: number;
    max: number;
    tempName: string;
    feelsLike: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windDirection: number;
}

export interface IForecastCard {
    date: number;
    temp: number;
    feelsLikeTemp: number;
    min: number;
    max: number;
    tempName: string;
    humidity: number;
    wind: number;
}
