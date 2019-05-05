import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';
import placeHolderThumbnail from './images/thumbnail.jpg';
const Book = (props) => {
    let authors = '';
    if(props.book.hasOwnProperty('authors')){
        authors =  <div className="book-authors">{props.book.authors.map((author, index) => {
            return <div key={`${author}-${index}`}>{author}</div>
        })}</div>;
    }
    let thumbnailUrl = props.book.hasOwnProperty('imageLinks') ?  props.book.imageLinks.thumbnail : placeHolderThumbnail;
    return (
        <li key={props.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnailUrl}")` }}></div>
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
