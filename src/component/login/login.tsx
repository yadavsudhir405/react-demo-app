import * as React from "react";

export class Login extends React.Component<any, LoginState>{
    constructor(props: any){
        super(props);
        this.state = {isLoggedIn: false};
    }

    render(){
        let isLoggedIn = this.state.isLoggedIn;
        return <div>
            The user is <b>{isLoggedIn ? 'Logged In' : 'not logged in'}</b> <button onClick={isLoggedIn ? this.logout :
            this.login}>{isLoggedIn ? 'Logout': 'Login'}</button>
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