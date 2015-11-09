import React from 'react';
import Treat from './Treat.jsx';

export default class TreatList extends React.Component {
	render() {
		var that = this;
		var treats = this.props.data.map(function(treat) {
			var isSelected = (that.props.selectedTreat && that.props.selectedTreat.name === treat.name);
			return (
				<Treat key={treat.id}
					treat={treat}
					isSelected={isSelected}
					onTreatSelected={that.props.onSelectTreat}
				/>
			);
		});
		return (
			<div id="treats">
				{treats}
			</div>
		);
	}
};
