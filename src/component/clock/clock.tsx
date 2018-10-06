import * as React from "react";
import Timer = NodeJS.Timer;
import {clearInterval} from "timers";

export class Clock extends React.Component<any, DateState>{
    timer: Timer;
    constructor(props: Readonly<any>){
        super(props);
        this.state = {date: new Date()}
    }
    render(){
        return <div>
            <h1> It is {this.state.date.toLocaleTimeString()}</h1>
        </div>
    }

    componentDidMount(){
        this.timer = setInterval(()=> this.tick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({date: new Date()})
    }
}
interface DateState {
    date: Date
}