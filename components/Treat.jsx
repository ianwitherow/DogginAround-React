import React from 'react';

export default class Treat extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.onTreatSelected(this.props.treat);
	}
	render() {
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
};
