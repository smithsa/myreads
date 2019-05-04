import React, {Component} from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class ListBooks extends Component{
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.bookShelves.map((bookShelf) => {
                            return <BookShelf key={bookShelf.value} books={this.props.books} bookShelves={this.props.bookShelves} title={bookShelf.name} />;
                        })}
                    </div>
                </div>
                <div className="open-search">
                    {/* TODO: add a Link here */}
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        );
    }
}

ListBooks.propTypes = {
    bookShelves: PropTypes.array,
    books: PropTypes.array
};

export default ListBooks;
