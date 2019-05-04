import React from 'react';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";

const bookShelves = [
    {
      name:'Currently Reading' ,
      value: 'currentlyReading',
      shelf: []
    },
    {
      name:'Want to Read' ,
      value: 'wantToRead',
      shelf: []
    },
    {
      name:'Read' ,
      value: 'read',
      shelf: []
    }
];
class BooksApp extends React.Component {
    state = {
        books: []
    }
    updateBookShelf = (book, shelf) => {
        let existingBook = this.state.books.find((queriedBook) => (book.id === queriedBook.id));
        if(existingBook){
            let books = this.state.books.map((currentBook) =>{
                if(currentBook.id === book.id){
                    currentBook.shelf = shelf;
                    BooksAPI.update(book, shelf);
                }
                return currentBook;
            });
            this.setState({books});
        }else{
            BooksAPI.update(book, shelf).then((insertedBook) => {
                let curBooks = [...this.state.books];
                curBooks.push(insertedBook);
                return curBooks;
            });
            let curBooks = [...this.state.books];
            let newBook = {...book};
            newBook.shelf = shelf;
            curBooks.push(newBook);
            this.setState({books: curBooks});
        }

    }
    componentDidMount(){
        BooksAPI.getAll().then((books) =>{
            this.setState({books});
        });
    }
    render() {
        return (
          <div className="app">
            <Route exact path="/" render={()=>(
                <ListBooks updateBookShelf={this.updateBookShelf} books={this.state.books} bookShelves={bookShelves} />
            )} />
            <Route exact path="/search" render={()=> (
                <SearchBooks updateBookShelf={this.updateBookShelf} books={this.state.books} bookShelves={bookShelves} />
            )}/>
          </div>
        )
    }
}

export default BooksApp
