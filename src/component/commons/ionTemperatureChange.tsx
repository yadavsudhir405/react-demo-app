import {TemperatureValue} from "./temperatureValue";

export interface IOnTemperatureChange {
    (temperatureValue: TemperatureValue): void;
}