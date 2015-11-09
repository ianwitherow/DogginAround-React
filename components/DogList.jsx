import React from 'react';
import Dog from './Dog.jsx';

export default class DogList extends React.Component {
	render() {
		var that = this;
		var dogs = this.props.data.map(function(dog) {
			return (
				<Dog key={dog.id}
					imageUrl={dog.imageUrl}
					name={dog.name}
					happiness={dog.happiness}
					hunger={dog.hunger}
					selectedTreat={that.props.selectedTreat}
					onTreatGiven={that.props.onGiveTreat}
				/>
			);
		});
		return (
			<div id="dogs">
				{dogs}
			</div>
		);
	}
};

