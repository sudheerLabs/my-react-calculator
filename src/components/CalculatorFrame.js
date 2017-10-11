import React, { Component } from 'react';


import { CalcButtons } from './CalcButtons';
import { Display } from './Display';
import * as API from '../api/API';

class CalculatorFrame extends Component {
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

            API.evaluateExpression(operands[0], operands[1], this.state.operator);
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

export default CalculatorFrame;