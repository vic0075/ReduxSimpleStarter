import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onChange(term) {
        this.setState({term});
    }

    render() {
        return (
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="Get a five day forecast in your favorite cities"
                    className="form-control"
                    onChange={this.onInputChange}
                    // onChange={event => this.onChange(event.target.value)}
                    value={this.state.term}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>

            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);