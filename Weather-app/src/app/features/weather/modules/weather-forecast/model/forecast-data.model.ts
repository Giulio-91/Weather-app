export class ForecastData {
    forecast: Array<ForecastDailyData>;
    city: string;
}

export class ForecastDailyData {
    humidity: number;
    temp_min: number;
    temp_max: number;
    description: string;
    icon: string;
    dt: string;
}
