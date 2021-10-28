import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Greetings/>,
    document.getElementById('root')
);

function Greetings() {
    return <h2> Greeting From All of Us!!</h2>
}

reportWebVitals(console.log);
