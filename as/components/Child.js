import React from 'react'

class Child extends React.Component {
	constructor(){
		super();
		this.handleInput1Change = this.handleInput1Change.bind(this);
	}

	handleInput1Change(e){
		this.props.changeInput(e.target.value);
	}
	
    render(){
        return (
            <div>
            	<input 
            		value={this.props.input1} 
            		onChange={this.handleInput1Change} 
            		placeholder='input from child component'
            	/>
            </div>
        )
    }
}

export default Child;