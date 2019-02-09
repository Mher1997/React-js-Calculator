import React from 'react';
import Input1 from './Inputs/Input1';
import Input2 from './Inputs/Input2';
import Input3 from './Inputs/Input3';


class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            input1 : 0,
            input2 : '',
            input3 : 0,
            result : 0,
        }
        this.inputChange = this.inputChange.bind(this)
        this.result = this.result.bind(this)
    }

    inputChange(value,x){
       if(x===1){this.setState({input1 : value},()=>this.result(value))};
       if(x===2){this.setState({input2 : value},()=>this.result(value))};
       if(x===3){this.setState({input3 : value},()=>this.result(value))};
    }

    result(value){
        console.log(value)
        const{input1,input2,input3} = this.state;
        if(input2==='+'){this.setState({result : input1 + input3})};
        if(input2==='-'){this.setState({result : input1 - input3})}
        if(input2==='*'){this.setState({result : input1 * input3})}
        if(input2==='/'){this.setState({result : input1 / input3})}
    }

    render(){
        const{result} = this.state;
        return(
            <div>
               <Input1 inputChange = {this.inputChange}/>
               <Input2 inputChange = {this.inputChange}/>
               <Input3 inputChange = {this.inputChange}/>
               <span>{result}</span>
            </div>
        )
    }
}

export default Calculator; 