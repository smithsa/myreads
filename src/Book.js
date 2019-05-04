import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

const Book = (props) => {
    let authors = '';
    if(props.book.hasOwnProperty('authors')){
        authors =  <div className="book-authors">{props.book.authors.map((author, index) => {
            return <div key={`${author}-${index}`}>{author}</div>
        })}</div>;
    }
    return (
        <li key={props.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks.thumbnail}")` }}></div>
                    <BookShelfChanger updateBookShelf={props.updateBookShelf} book={props.book} bookShelves={props.bookShelves} />
                </div>
                <div className="book-title">{props.book.title}</div>
                {authors}
            </div>
        </li>
    );

};

Book.propTypes = {
    book: PropTypes.object,
    bookShelves: PropTypes.array,
    updateBookShelf: PropTypes.func

};

export default Book;
