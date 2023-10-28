import { WeatherData } from "./weatherData";
import { WeatherObserver } from "./weatherObsever";

export class StatisticsDisplay implements WeatherObserver {
    private data: WeatherData | undefined;

    update(data: WeatherData): void {
        this.data = data;
    }

    display(): string {
        if (!this.data) {
            throw Error('No Data')
        }
        return `Avg/Max/Min temperature = ${this.data.temperature}/${this.data.humidity}/${this.data.pressure}`;

    }
}