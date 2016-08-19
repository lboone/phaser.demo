var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO);
game.state.add('state0',demo.state0);
game.state.add('state1',demo.state1);
game.state.add('state2',demo.state2);
game.state.add('state3',demo.state3);
game.state.add('state4',demo.state4);
game.state.add('state5',demo.state5);
game.state.add('state6',demo.state6);
game.state.add('state7',demo.state7);
game.state.add('state8',demo.state8);
game.state.add('state9',demo.state9);
game.state.start(pubStates[START_STATE]);


var vals = [
	{
		name: 'Lloyd',
		age: 45,
	},
	{
		name: 'Melissa',
		age: 41,
	},
	{
		name: 'Julius',
		age: 13,
	},
	{
		name: 'Brianna',
		age: 11,
	},
	{
		name: 'Alana',
		age: 8,
	}
];