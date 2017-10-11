import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CalcButtons } from './components/CalcButtons';
import { Display } from './components/Display';


class App extends Component {

  constructor() {
    super();
    // set our default state
    this.state = {
      expression: '',
      result: '',
      operator: ''
    }
    
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(event){
    const value = event.target.value; 
    switch (value) {
      case '=': { 
        var temp = this.state.expression;
        if(temp != ""){
          var operations = "=*/-";
          if(!operations.includes(temp.slice(-1))){

            var operands = temp.split(this.state.operator);

            //API.evaluateExpression(operand[0], operand[1], operand);
            const result = eval(this.state.expression).toString();
            this.setState({ result });
          }
        }
        break;
      }
      case 'cls': {
        this.setState({ expression: '', result: '', operatorEntered: false, operandCount:0 });
        break;
      }
      case '*':
      case '+':
      case '-':
      case '/': {
        var temp = this.state.expression;
        if(temp != ""){
          var count = temp.includes("+") || temp.includes("-") || temp.includes("*") || temp.includes("/");
          console.log(count + " " + temp);
          if(count === false)
            this.setState({ expression: this.state.expression += ` ${value} `, operator: ` ${value} ` });
        }
        break;
      }
      default: {
        this.setState({ expression: this.state.expression==="0"? value : this.state.expression+= value});
        break;
      }
    }
    console.log(this.state);
  }


  render(){

    return(
      <div className="container text-center">
            <div className="col-md-3 col-md-offset-4 text-center">
                <div className="row">
                   Demo Calculator
                </div>
                
                <div>                       
                    <Display expression={this.state.expression} result={this.state.result}/>
                </div>
                
                <div>
                    <CalcButtons handleClick={this.handleClick}/>
                </div>
               
            </div>
            </div>             
        );
    }
}

export default App;
