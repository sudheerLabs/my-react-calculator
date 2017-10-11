import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CalculatorFrame } from './components/CalculatorFrame';


class App extends Component {


  render(){

    return(
      <div className="App">
        <CalculatorFrame/>
      </div>           
        );
    }
}

export default App;
