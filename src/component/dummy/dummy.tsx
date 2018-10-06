import * as React from "react";
import {Clock} from "../clock/clock";
export class Dummy extends React.Component<NamedParam, CountingState>{
    constructor(props: NamedParam){
        super(props);
        this.state = {count: 0};
        this.onButtonClick = this.onButtonClick.bind(this);
       this.showPopup = this.showPopup.bind(this);
    }
    render(){
        return <div>
            <h1> Hello World {this.props.address.country} {this.props.address.state}</h1>
            <button onClick={this.onButtonClick}>Click Me</button> {this.state.count}
            <button onClick={this.showPopup}>show popup</button>
            <Clock/>
        </div>;
    }

    onButtonClick(){
        this.setState({count: this.state.count+1})
    }
    showPopup(){
        alert("Whatsppppp!!!");
    }

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