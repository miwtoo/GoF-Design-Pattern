import { WeatherData } from "./weatherData";
import { WeatherObserver } from "./weatherObsever";

export class ForecastDisplay implements WeatherObserver {
    private data: WeatherData | undefined;

    update(data: WeatherData) {
        this.data = data;
    }

    display(): string {
        if (!this.data) {
            throw Error('No Data')
        }
        return `Forecast: More of the same`;

    }
}