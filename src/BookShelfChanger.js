import React , {Component} from 'react';
import PropTypes from 'prop-types';
class BookShelfChanger extends Component{
    state = {
        shelfValue : this.props.book.shelf
    }
    shelfOnChangeHandler = (e) =>{
        let newShelfValue = e.target.value;
        this.setState({shelfValue: newShelfValue});
        this.props.updateBookShelf(this.props.book, newShelfValue);
    }
    render(){
        return (
            <div className="book-shelf-changer">
                <select onChange={this.shelfOnChangeHandler} value={this.state.shelfValue || 'none'}>
                    <option value="move" disabled>Move to...</option>-
                    {this.props.bookShelves.map((shelf, index) => {
                        return <option key={`shelf-opt-${index}`} value={shelf.value}>{shelf.name}</option>;
                    })}
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
};

BookShelfChanger.propTypes = {
    book : PropTypes.object,
    bookShelves: PropTypes.array,
    updateBookShelf: PropTypes.func
};

export default BookShelfChanger;
