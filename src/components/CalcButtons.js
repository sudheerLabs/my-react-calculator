import React, {Component} from 'react';


class CalcButtons extends Component{
	
	render(){
		return(
			<div>
                <div className="row">
	                     <input type = "button" className='col-md-3 btn-primary' onClick={this.props.handleClick} value ="7" readOnly />
	                     <input type = "button" className='col-md-3 btn-primary' onClick={this.props.handleClick} value ="8" readOnly />
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="9" readOnly />
	                     <input type = "button" className="col-md-3 btn-warning" onClick={this.props.handleClick} value ="+" readOnly />
                </div>

                <div className="row">
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="4" readOnly />
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="5" readOnly />
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="6" readOnly />
	                     <input type = "button" className="col-md-3 btn-warning" onClick={this.props.handleClick} value ="-" readOnly />
                </div>

                <div className="row">
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="1" readOnly />
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="2" readOnly />
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="3" readOnly />
	                     <input type = "button" className="col-md-3 btn-warning" onClick={this.props.handleClick} value ="*" readOnly />
                </div>

                <div className="row">
	                     <input type = "button" className="col-md-3 btn-primary" onClick={this.props.handleClick} value ="0" readOnly />
	                     <input type = "button" className="col-md-3 btn-warning" onClick={this.props.handleClick} value ="cls" readOnly />
	                     <input type = "button" className="col-md-3 btn-success" onClick={this.props.handleClick} value ="=" readOnly />
	                     <input type = "button" className="col-md-3 btn-warning" onClick={this.props.handleClick} value ="/" readOnly />
                </div>

			</div>
		);

	}
}

export  {CalcButtons};