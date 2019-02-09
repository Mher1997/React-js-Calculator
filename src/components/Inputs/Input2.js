import React from 'react';

const Input2 = (props)=>{

    function input2(event){
        const {inputChange} = props;
        inputChange(event.target.value,2);
    }

    return(
        <input onChange = {input2}/>
    )
}

export default Input2;