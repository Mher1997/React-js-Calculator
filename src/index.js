import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';

const App = () =>{
    return(
        <div>
            
            <Calculator />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))