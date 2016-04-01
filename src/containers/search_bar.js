import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};

		//different approach from before to make this.setState work within onInputChange method
		//overriding the local onInputChange method and binding it to SearchBar
		this.onInputChange =this.onInputChange.bind(this);
		this.onFormSubmit =this.onFormSubmit.bind(this);
	}
	

	onInputChange(event) {
		this.setState({term: event.target.value});
	}



	onFormSubmit(event) {
		// we are using onFormSubmit to prevent a default action by form element to send a POST request and refresh the page
		// since we are doing a Single Page App, we don't want the page to refresh
		event.preventDefault();

		//takes the input from form injects it into 'fetchWeather'
		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get forecast"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

//Action creator binding 'fetchWeather' action and dispatching it across the entire app to reducers
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// by passing null, we are filling in a first value that we aren't using for connect function
//mapDispatchToProps/bindActionCreators is always in the second slot
export default connect(null, mapDispatchToProps)(SearchBar);

