import { WeatherData } from "./weatherData";
import { WeatherObserver } from "./weatherObsever";


export class ConditionDisplay implements WeatherObserver {
    private data: WeatherData | undefined;

    update(data: WeatherData) {
        this.data = data;
    }

    display(): string {
        if (!this.data) {
            throw Error('No Data')
        }
        return `Current conditions: ${this.data.temperature}C degrees and ${this.data.humidity}% humidity`;

    }
}
