import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

class SearchBooks extends Component{
    state = {
        query : ''
    }
    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    {/* TODO: add a Link here */}
                    <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => {
                            return (book.name.indexOf(this.state.query) > -1);
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
