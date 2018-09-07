import React, { Component } from "react";
import {render} from 'react-dom';
import './index.css'
import Main from './Components/Main'
class App extends Component{
    render(){
        return(
            <div>
                <Main />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
