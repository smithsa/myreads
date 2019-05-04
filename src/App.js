import React from 'react';
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
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
            <ListBooks bookShelves={bookShelves} />
        )} />
        <Route exact path="/search" render={()=> (
            <SearchBooks bookShelves={bookShelves} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
