import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const book1 = {
    "title": "Book1",
    "description":"Here is the description",
    "img":""
}
const book2 = {
    "title": "Book2",
    "description":"Here is the description 2",
    "img":""
}

function BookList() {
    return (
        <div className="booklist">
            <BookName title={book1.title} description={book1.description} img={book1.img}/>
            <BookName title={book2.title} description={book2.description} img={book2.img}/>
        </div>
    )

}

const BookName = ({img, title, description}) => {
    return <div className='book'>
        <img src={img} alt="book"/>
        <h1>{title}</h1>
        <p> {description}</p>
    </div>
}
ReactDOM.render(<BookList/>,
    document.getElementById('root')
);
