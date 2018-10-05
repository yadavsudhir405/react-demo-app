import React, {Component} from 'react';
import './App.css';

class AuthorQuiz extends Component {
    constructor(props) {
        super(props);
        this.clicks = {count: 0};
    }
        render()
        {
            return (
                <div>
                    Author-Quiz{this.props.name}
                    <button onClick={() => {
                        this.setState({clicks: {count: this.clicks.count + 1}})
                    }}> Click Me
                    </button>
                    {this.clicks.count}
                </div>
            );
        }
    }

    export default AuthorQuiz;
