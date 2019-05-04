import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BookShelf = (props) =>{
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                        {props.books.filter((book) => {
                            return props.value === book.shelf;
                        }).map((book, key) => {
                            return <Book key={`${props.title}-${key}`} book={book} bookShelves={props.bookShelves} />;
                        })}
                </ol>
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    books: PropTypes.array,
    bookShelves: PropTypes.array
};

export default BookShelf;
