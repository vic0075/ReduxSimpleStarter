import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends Component {

    listBooks() {
        return (
            this.props.books.map(book =>
                <li
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item"
                    key={book.title}
                >
                    {book.title}
                </li>
            )
        );
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.listBooks()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);