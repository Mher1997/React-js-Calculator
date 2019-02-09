import React from 'react';

const Input3 = (props)=>{
    
    function input3(event){
        const {inputChange} = props;
        inputChange(event.target.value,3);
    }

    return(
        <input onChange = {input3} type="number"/>
    )
}

export default Input3;