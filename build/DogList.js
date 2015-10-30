var DogList = React.createClass({
	render: function () {
		var that = this;
		var dogs = this.props.data.map(function (dog) {
			return React.createElement(Dog, { key: dog.id,
				imageUrl: dog.imageUrl,
				name: dog.name,
				happiness: dog.happiness,
				hunger: dog.hunger,
				selectedTreat: that.props.selectedTreat,
				onTreatGiven: that.props.onGiveTreat
			});
		});
		return React.createElement(
			"div",
			{ id: "dogs" },
			dogs
		);
	}
});