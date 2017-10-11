import React, {Component} from 'react';

class Display extends Component{
	render(){
		return(
			<div className="row">
				<input className= "col-md-12" type="text" readOnly value={this.props.expression}/>
			</div>
		);
	}
}


export {Display};