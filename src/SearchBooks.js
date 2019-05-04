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
    queryUpdateHandler = (e) => {
        let curQueryValue = e.target.value;
        this.setState({query: curQueryValue});
        if(curQueryValue !== ''){
            BooksAPI.search(curQueryValue).then((books) =>{
                if(books instanceof Array){
                    console.log(books);
                    this.setState({books});
                }else{
                    this.setState({books: []});
                }
            });
        }else{
            this.setState({books: []});
        }
    }
    updateBookShelf = (book, shelf) => {
        let books = this.state.books.filter((currentBook) =>{
            if(currentBook.id === book.id){
                currentBook.shelf = shelf;
                BooksAPI.update(book, shelf);
                return false;
            }
            return true;
        });
        this.setState({books});
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
                        {this.state.books.filter((book) => {
                            let bookTitle = book.title.toLowerCase();
                            let userQuery = this.state.query.toLowerCase();
                            return (bookTitle.indexOf(userQuery) > -1);
                        }).map((book, key) => {
                            return <Book key={`${book.name}-${key}`} book={book} bookShelves={this.props.bookShelves} updateBookShelf={this.updateBookShelf} />;
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

SearchBooks.propTypes = {
    bookShelves: PropTypes.array
};

export default SearchBooks;
