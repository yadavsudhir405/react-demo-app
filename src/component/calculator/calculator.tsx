import * as React from "react";
import {BoilingVerdict} from "../boilingVerdict/boilingVerdict";

export class Calculator extends React.Component<any, CalculatorState>{
    constructor(props: any){
        super(props);
        this.state = {temperature: 10};
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        let currentTemperature =  this.state.temperature;
        return <div>
            <fieldset>
                <legend>Enter temperature in celcius</legend>
                <input type="text" value={currentTemperature} onChange={this.handleChange}/>
            </fieldset>
            <BoilingVerdict  temperature={currentTemperature}/>
        </div>
    }

    handleChange(event: any) {
        let newValue =  event.target.value;
        this.setState({temperature: newValue});
    }
}

interface CalculatorState {
    temperature: number;
}