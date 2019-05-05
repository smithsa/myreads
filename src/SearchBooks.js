import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";
import {Link} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component{
    state = {
        query : '',
        books: []
    }
    //updates the state and search results based on current input
    queryUpdateHandler = (e) => {
        let curQueryValue = e.target.value;
        this.setState({query: curQueryValue});
        this.updateSearch(curQueryValue);

    }
    //helper function to make a search call to the API
    updateSearch = (curQueryValue) => {
        if(curQueryValue !== ''){
            BooksAPI.search(curQueryValue).then((books) =>{
                if(books instanceof Array){
                    this.setState({books});
                    console.log(books);
                }else{
                    this.setState({books: []});
                }
            });
        }else{
            this.setState({books: []});
        }
    }
    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.queryUpdateHandler} value={this.state.query} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book, key) => {
                            let searchedBook = this.props.books.find((queriedBook) => (queriedBook.id === book.id));
                            let bookOb = book;
                            if(searchedBook){
                                bookOb = searchedBook;
                            }
                            return <Book key={`${book.name}-${key}`} book={bookOb} bookShelves={this.props.bookShelves} updateBookShelf={this.props.updateBookShelf} />;
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

SearchBooks.propTypes = {
    bookShelves: PropTypes.array,
    books: PropTypes.array,
    updateBookShelf: PropTypes.func
};

export default SearchBooks;
