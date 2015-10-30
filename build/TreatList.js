var TreatList = React.createClass({
	render: function () {
		var that = this;
		var treats = this.props.data.map(function (treat) {
			var isSelected = that.props.selectedTreat && that.props.selectedTreat.name === treat.name;
			return React.createElement(Treat, { key: treat.id,
				treat: treat,
				isSelected: isSelected,
				onTreatSelected: that.props.onSelectTreat
			});
		});
		return React.createElement(
			"div",
			{ id: "treats" },
			treats
		);
	}
});