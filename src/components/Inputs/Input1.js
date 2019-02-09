import React from 'react';

const Input1 = (props)=>{
    
    function input1(event){
        const {inputChange} = props;
        inputChange(+event.target.value,1);
    }

    return(
        <input onChange ={input1} type="number"/>
    )
}

export default Input1;