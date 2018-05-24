import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return <input onChange={this.onInputChange}/>;
    }

    // onInputChange(event) {
    //     // console.log(event.target.value);
    //     console.log(event);
    //     // setTimeout(() => {
    //     //     console.log(event.target.value);
    //     // }, 800);
    // }
};