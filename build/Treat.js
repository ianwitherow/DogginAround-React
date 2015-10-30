var Treat = React.createClass({
	handleClick: function () {
		this.props.onTreatSelected(this.props.treat);
	},
	render: function () {
		var className = "treat";
		if (this.props.isSelected) {
			className += " selected";
		}

		return React.createElement(
			"div",
			{ className: className, onClick: this.handleClick },
			React.createElement("img", { src: this.props.treat.imageUrl }),
			React.createElement(
				"span",
				{ className: "treat-name" },
				this.props.treat.name
			)
		);
	}
});