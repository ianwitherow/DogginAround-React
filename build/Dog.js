var Dog = React.createClass({
	capNumber: function (val) {
		//Make sure number can be no lower than 0 and no higher than 100
		if (val > 100) {
			val = 100;
		} else if (val < 0) {
			val = 0;
		}
		return val;
	},
	getInitialState: function () {
		return {
			happiness: this.props.happiness,
			hunger: this.props.hunger
		};
	},
	handleClick: function () {
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
	},
	render: function () {
		return React.createElement(
			"div",
			{ className: "dog", onClick: this.handleClick },
			React.createElement("img", { src: this.props.imageUrl }),
			React.createElement(
				"div",
				{ className: "dog-name" },
				this.props.name
			),
			React.createElement(
				"div",
				{ className: "dog-status" },
				"Happiness: ",
				this.state.happiness
			),
			React.createElement(
				"div",
				{ className: "dog-status" },
				"Hunger: ",
				this.state.hunger
			)
		);
	}
});