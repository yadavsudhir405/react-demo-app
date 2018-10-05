import * as React from "react";
export class Dummy extends React.Component<NamedParam, {}>{

    render(){
        return <h1> Hello World {this.props.address.country} {this.props.address.state}</h1>;
    }
}

interface NamedParam {
    address: Address;
}
interface Address {
    country: string,
    state: string
}