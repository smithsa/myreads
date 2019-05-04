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
          console.log(books);
        this.setState({books});
      });
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <ListBooks bookShelves={bookShelves} books={this.state.books} />
        )} />
        <Route exact path="/search" render={()=> (
            <SearchBooks bookShelves={bookShelves} books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
