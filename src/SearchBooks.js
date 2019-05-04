import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";
import {Link} from 'react-router-dom';

class SearchBooks extends Component{
    state = {
        query : ''
    }
    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => {
                            return (book.title.indexOf(this.state.query) > -1);
                        }).map((book, key) => {
                            return <Book key={`${book.name}-${key}`} book={book} bookShelves={this.props.bookShelves} />;
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

SearchBooks.propTypes = {
    books: PropTypes.array,
    bookShelves: PropTypes.array
};

export default SearchBooks;
