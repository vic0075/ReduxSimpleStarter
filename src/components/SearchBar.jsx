import React from 'react';

export default class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = {name: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input value={this.state.name}
                       onChange={event => {
                           console.log(event.target.value);
                           this.setState({name: event.target.value})
                       }}/>
                <br/>
            </div>
        );
    }
};