import React from 'react';

import TreatList from './TreatList.jsx';
import DogList from './DogList.jsx';

export default class Game extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedTreat: null,
			statusMessage: "Select a treat, then choose a dog to give it to!"
		};
		this.selectTreat = this.selectTreat.bind(this);
		this.giveTreat = this.giveTreat.bind(this);
	}
	setStatus(message) {
		this.setState({
			statusMessage: message
		});
	}
	selectTreat(treat) {
		if (!this.state.selectedTreat || treat.name != this.state.selectedTreat.name) {
			//Picked up a new treat
			this.setState({ selectedTreat: treat });
			this.setStatus("Picked up " + treat.name);
		}
	}
	giveTreat(dog) {
		var message = "";
		if (this.state.selectedTreat) {
			message = "Gave " + this.state.selectedTreat.name + " to " + dog + "!";
		} else {
			message = "You need to select a treat first!";
		}
		this.setStatus(message);
	}
	render() {
		return (
			<div>
				<p>
					{this.state.statusMessage}
				</p>
				<TreatList data={this.props.treats}
					selectedTreat={this.state.selectedTreat}
					onSelectTreat={this.selectTreat}
				/>
				<DogList data={this.props.dogs}
					selectedTreat={this.state.selectedTreat}
					onGiveTreat={this.giveTreat}
				/>
			</div>
		);
	}
};
