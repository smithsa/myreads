import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import {Route} from 'react-router-dom';

const bookShelves = [
    {
      name:'Currently Reading' ,
      value: 'currentlyReading'
    },
    {
      name:'Want to Read' ,
      value: 'wantToRead'
    },
    {
      name:'Read' ,
      value: 'read'
    }
];
class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
      BooksAPI.getAll().then((books) =>{
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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <ListBooks updateBookShelf={this.updateBookShelf} bookShelves={bookShelves} books={this.state.books} />
        )} />
        <Route exact path="/search" render={()=> (
            <SearchBooks bookShelves={bookShelves} books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
