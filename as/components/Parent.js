import React from 'react'
import Child from './Child'

class Parent extends React.Component {

	constructor(){
		super();
		this.state = {
			input1: '',
		}
		this.changeInput = this.changeInput.bind(this)
	}

	changeInput(inputValue){
		this.setState({input1: inputValue})
	}
	
    render(){
        return (
            <div>
            	<Child input1={this.state.input1} changeInput={this.changeInput}/>
            	<br />
            	Result from parent component: {this.state.input1}
            </div>
        )
    }
}

export default Parent;