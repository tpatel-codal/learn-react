import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


function BookList() {
    return (
        <div>
            <BookName/>
        </div>
    )

}

const BookName = () => {
    return <div>
        <img src="https://m.media-amazon.com/images/I/41gr3r3FSWL._SY346_.jpg" alt="book"/>
        <div>Book1</div>
        <BookDescription/>
    </div>
}
const BookDescription = () => {
    return <div>
        <p> Here is the Description</p>
    </div>
}
ReactDOM.render(<BookList/>,
    document.getElementById('root')
);
reportWebVitals(console.log);
