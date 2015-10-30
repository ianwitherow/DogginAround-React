var Treat = React.createClass({
	handleClick: function() {
		this.props.onTreatSelected(this.props.treat);
	},
	render: function() {
		var className = "treat";
		if (this.props.isSelected) {
			className += " selected"
		} 

		return (
			<div className={className} onClick={this.handleClick}>
				<img src={this.props.treat.imageUrl} />
				<span className="treat-name">
					{this.props.treat.name}	
				</span>
			</div>
		);
	}
});
