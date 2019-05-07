import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";
import {Link} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import {debounce} from 'throttle-debounce';

class SearchBooks extends Component{
    constructor() {
        super();
        this.callAjax = debounce(500, this.updateSearch);
    }
    state = {
        query : '',
        books: [],
        booksFound: false
    }
    //updates the state and search results based on current input
    queryUpdateHandler = (e) => {
        this.setState({query: e.target.value});

    }
    debounceWrapper = (e) => {
        this.updateSearch(e.target.value);
    }
    //helper function to make a search call to the API
    updateSearch = (curQueryValue) => {
        if(curQueryValue !== ''){
            BooksAPI.search(curQueryValue).then((books) =>{
                if(books instanceof Array){
                    this.setState({books, booksFound: true});
                    console.log(books);
                }else{
                    this.setState({books: [], booksFound: false});
                }
            });
        }else{
            this.setState({books: [], booksFound: false});
        }
    }
    render(){
        let noBooksFoundMsg = <div className="search-not-found">NO BOOKS FOUND</div>;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onKeyUp={this.debounceWrapper.bind(this)} onChange={this.queryUpdateHandler} value={this.state.query} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    { !this.state.booksFound && this.state.query !== '' ?  noBooksFoundMsg : ''}
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
