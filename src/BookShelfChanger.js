import React , {Component} from 'react';
import PropTypes from 'prop-types';
class BookShelfChanger extends Component{
    state = {
        shelfValue : this.props.state
    }
    render(){
        return (
            <div className="book-shelf-changer">
                <select value={this.state.shelfValue}>
                    <option value="move" disabled>Move to...</option>
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
    shelfValue : PropTypes.string,
    bookID : PropTypes.number,
    bookShelves: PropTypes.array
};

export default BookShelfChanger;
