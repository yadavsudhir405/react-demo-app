import * as React from "react";
import {TemperatureUnit} from "../commons/temperatureUnit";
import {IOnTemperatureChange} from "../commons/ionTemperatureChange";

export class TemperatureInput extends React.Component<InputTempertaure, any>{
    constructor(props: InputTempertaure){
        super(props);
    }

    render() {
        let currentTemperature =  this.props.temperature;
        return (<fieldset>
            <legend>Enter temperature in {this.props.temperatureUnit}</legend>
            <input type="text" value={currentTemperature} onChange={this.handleChange}/>
        </fieldset>);
    }
    handleChange = (event: any) => {
        let newValue = event.target.value;
        this.props.onTemperatureChange({temperature: newValue, unit: this.props.temperatureUnit});

    }
}
interface InputTempertaure {
    temperatureUnit: TemperatureUnit;
    temperature: number;
    onTemperatureChange: IOnTemperatureChange;
}


