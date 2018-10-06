import * as React from "react";

export class Login extends React.Component<any, LoginState>{
    constructor(props: any){
        super(props);
        this.state = {isLoggedIn: false};
    }

    render(){
        let isLoggedIn = this.state.isLoggedIn;
        let element ;
        if(isLoggedIn){
            element = <button onClick={this.logout}>Log-out</button>
        }else{
            element = <button onClick={this.login}> Log-In</button>
        }
        return <div>
            The user is <b>{isLoggedIn ? 'Logged In' : 'not logged in'}</b> {element}
        </div>
    }

    logout = () => {
        this.setState({isLoggedIn: false});
    };

    login = () => {
        this.setState({isLoggedIn: true});
    }
}

interface LoginState {
    isLoggedIn: boolean
}