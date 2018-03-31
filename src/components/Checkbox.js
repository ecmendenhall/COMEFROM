import React, { Component } from 'react';
import MUICard from 'material-ui/Card'
import MUICheckbox from 'material-ui/Checkbox'

class Checkbox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: false
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		const newState = !this.state.checked;
		this.setState({
			checked: newState
		})
	}

	render() {

		return (
			<MUICard raised={ true } >
			  <MUICheckbox id="notARobot" onChange={ this.onChange } /><label for="notARobot">I'm not a robot.</label>
			</MUICard>
			);
		}

	}

	export default Checkbox;