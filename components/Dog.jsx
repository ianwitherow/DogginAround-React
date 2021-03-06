import React from 'react';

export default class Dog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			happiness: this.props.happiness,
			hunger: this.props.hunger
		}
		this.handleClick = this.handleClick.bind(this);
	}

	capNumber(val) {
		//Make sure number can be no lower than 0 and no higher than 100
		if (val > 100) {
			val = 100;
		} else if (val < 0) {
			val = 0;
		}
		return val;
	}
	handleClick() {
		if (this.props.selectedTreat !== null) {
			var treat = this.props.selectedTreat;
			var happiness = this.capNumber(this.state.happiness + treat.happiness);
			var hunger = this.capNumber(this.state.hunger + treat.hunger);

			this.setState({
				happiness: happiness,
				hunger: hunger
			});
		}

		//Send the event on up the chain
		this.props.onTreatGiven(this.props.name);
	}
	render() {
		return (
			<div className="dog" onClick={this.handleClick}>
				<img src={this.props.imageUrl} />
				<div className="dog-name">
					{this.props.name}
				</div>
				<div className="dog-status">
					Happiness: {this.state.happiness}
				</div>
				<div className="dog-status">
					Hunger: {this.state.hunger}
				</div>
			</div>
		);
	}
};

