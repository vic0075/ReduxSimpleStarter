import React, {Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Please select a Book</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Name of the book: <b>{this.props.book.title}</b></div>
                <div>Total Number of pages: <b>{this.props.book.pages}</b></div>
            </div>
        )
    }
}

//for better readability rename this to mapStateToProps
function abc(abc) {
    return {
        book: abc.activeBook
    };
}

export default connect(abc)(BookDetail);