import React, {Component} from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class ListBooks extends Component{
    state = {
        books: []
    }
    componentDidMount(){
        BooksAPI.getAll().then((books) =>{
            console.log(books);
            this.setState({books});
        });
    }
    updateBookShelf = (book, shelf) => {
        let books = this.state.books.map((currentBook) =>{
            if(currentBook.id === book.id){
                currentBook.shelf = shelf;
                BooksAPI.update(book, shelf);
            }
            return currentBook;
        });
        this.setState({books});
    }
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.bookShelves.map((bookShelf,index) => {
                            return <BookShelf updateBookShelf={this.updateBookShelf} key={`${bookShelf.value}-${index}`} value={bookShelf.value} books={this.state.books} bookShelves={this.props.bookShelves} title={bookShelf.name} />;
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

ListBooks.propTypes = {
    bookShelves: PropTypes.array
};

export default ListBooks;
