import * as React from "react";

export class BoilingVerdict extends React.Component<BoilingTemperature, any>{
    constructor(props: BoilingTemperature){
        super(props);
    }
    render(){
        if(this.props.temperature >= 100){
            return <p>Water will Boil</p>
        }else{
            return <p>Water will not boil</p>
        }
    }
}
interface BoilingTemperature {
    temperature: number;
}
