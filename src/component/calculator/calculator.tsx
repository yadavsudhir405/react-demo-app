import * as React from "react";
import {TemperatureInput} from "../temperatureUnit/temperatureInput";
import {TemperatureUnit} from "../commons/temperatureUnit";
import {TemperatureValue} from "../commons/temperatureValue";
import {IOnTemperatureChange} from "../commons/ionTemperatureChange";

export class Calculator extends React.Component<any, CalculatorState>{
    constructor(props: any){
        super(props);
        this.state = {temperature: null, unit: null};
    }
    temperatureFunc: IOnTemperatureChange = (temp: TemperatureValue) => {
        this.setState({temperature: temp.temperature, unit: temp.unit});
    };
    render(){
        return <div>
                <TemperatureInput temperatureUnit={TemperatureUnit.FARENHITE} temperature={this.farenhiteTemperature()} onTemperatureChange = {this.temperatureFunc} />
                <TemperatureInput temperatureUnit={TemperatureUnit.CELCIUS} temperature={this.celciusTemperature()} onTemperatureChange = {this.temperatureFunc}/>
            </div>
    }
    farenhiteTemperature(): number {
        return this.state.unit === TemperatureUnit.FARENHITE ? this.state.temperature : this.convertToFahrenheit(this.state.temperature);
    }

    celciusTemperature(): number {
        let currentUnit = this.state.unit;
        let currentTemperature = this.state.temperature;
        return currentUnit === TemperatureUnit.CELCIUS ? currentTemperature : this.converToCelcius(currentTemperature);
    }
    converToCelcius(farenhite: number): number {
        return (farenhite - 32) * 5 / 9;
    }

    convertToFahrenheit(celsius: number): number {
        return (celsius * 9 / 5) + 32;
    }
    handleChange = (temp: TemperatureValue) => {
        this.setState({temperature: temp.temperature, unit: temp.unit});
    }

}

interface CalculatorState {
    temperature: number;
    unit: TemperatureUnit
}