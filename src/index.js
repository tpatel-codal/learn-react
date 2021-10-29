import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css'



function BookList() {
    return (
        <div className="booklist">
            <BookName/>
            <BookName/>
            <BookName/>
            <BookName/>
            <BookName/>
            <BookName/>
        </div>
    )

}

const BookName = () => {
    return <div className='book'>
        <img src="https://m.media-amazon.com/images/I/41gr3r3FSWL._SY346_.jpg" alt="book"/>
        <h1>Book1</h1>
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
