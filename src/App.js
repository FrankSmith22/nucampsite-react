import React, { Component } from 'react';
import './App.css';
import { CAMPSITES } from './shared/campsites';
import Main from './components/MainComponents';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
        };
    }
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}

export default App;
