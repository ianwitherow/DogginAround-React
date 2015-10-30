
var Game = React.createClass({
	getInitialState: function() {
		return {
			selectedTreat: null,
			statusMessage: "Select a treat, then choose a dog to give it to!"
		}
	},
	selectTreat: function(treat) {
		if (!this.state.selectedTreat || treat.name != this.state.selectedTreat.name) {
			//Picked up a new treat
			this.setState({ selectedTreat: treat });
			this.setStatus("Picked up " + treat.name);
		}
	},
	giveTreat: function(dog) {
		var message = "";
		if (this.state.selectedTreat) {
			message = "Gave " + this.state.selectedTreat.name + " to " + dog + "!";
		} else {
			message = "You need to select a treat first!";
		}
		this.setStatus(message);
	},
	setStatus: function(message) {
		this.setState({
			statusMessage: message
		});
	},
	render: function() {
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
})
