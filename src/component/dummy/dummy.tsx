import * as React from "react";
import {Clock} from "../clock/clock";
export class Dummy extends React.Component<NamedParam, CountingState>{
    constructor(props: NamedParam){
        super(props);
        this.state = {count: 0}
    }
    render(){
        return <div>
            <h1> Hello World {this.props.address.country} {this.props.address.state}</h1>
            <button onClick={this.onButtonClick}>Click Me</button> {this.state.count}
            <Clock/>
        </div>;
    }

    onButtonClick(){
        this.setState({count: this.state.count+1})
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