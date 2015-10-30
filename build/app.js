
var treats = [{
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
}];

var dogs = [{
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
}];

ReactDOM.render(React.createElement(
	"div",
	{ id: "page" },
	React.createElement(
		"h1",
		null,
		"Doggin' Around!"
	),
	React.createElement(Game, { dogs: dogs, treats: treats })
), document.getElementById('app'));