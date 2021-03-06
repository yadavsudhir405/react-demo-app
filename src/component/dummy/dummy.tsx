import * as React from "react";
import {Clock} from "../clock/clock";
import {Login} from "../login/login";
import {Properties} from "../properties/properties";
import {Calculator} from "../calculator/calculator";
import {TemperatureInput} from "../temperatureUnit/temperatureInput";
import {TemperatureUnit} from "../commons/temperatureUnit";
export class Dummy extends React.Component<NamedParam, CountingState>{

    constructor(props: NamedParam){
        super(props);
        this.state = {count: 0};
    }
    render(){
        return <div>
            <h1> Hello World {this.props.address.country} {this.props.address.state}</h1>
            <button onClick={this.updateClick}>Click Me</button> {this.state.count}
            <button onClick={this.handleClick.bind(this,{address: "Sudhir"})}>show popup</button>
            <Clock/>
            <Login/>
            <Properties/>
            <Calculator/>
        </div>;
    }
    updateClick = () =>{
        this.setState({count: this.state.count+1})
    };
    handleClick = (param: NamedParam)=>{
        alert("Hello World" + param.address);
    };


}

interface NamedParam {
    address: Address;
}
interface Address {
    country: string,
    state: string
}

interface CountingState {
    count: number
}

interface ShowAlert {
    display(): void;
}