import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game.jsx';


var treats = [
	{
		id: 1,
		name: "Tofu",
		happiness: -5,
		hunger: -5,
		imageUrl: "treats/tofu.png"
	}, {
		id: 2,
		name: "Bacon",
		happiness: 5,
		hunger: -2,
		imageUrl: "treats/bacon.png"
	}, {
		id: 3,
		name: "Kibble",
		happiness: 2,
		hunger: -5,
		imageUrl: "treats/kibble.png"
	}
];

var dogs = [
	{
		id: 1,
		name: "Scruffy",
		happiness: 0,
		hunger: 100,
		imageUrl: "dogs/scruffy.png"
	}, {
		id: 2,
		name: "Steven",
		happiness: 0,
		hunger: 100,
		imageUrl: "dogs/steven.png"
	}, {
		id: 3,
		name: "Jeffrey",
		happiness: 0,
		hunger: 100,
		imageUrl: "dogs/jeffrey.png"
	},
]

/*
* Hierarchy
* =========
*	-Game
*		-TreatList
*			-Treat
*		-DogList
*			-Dog
*/

ReactDOM.render(
	<div id="page">
		<h1>
			Doggin' Around!
		</h1>
		<Game dogs={dogs} treats={treats} />
	</div>,
	document.getElementById('app')
);

