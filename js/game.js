// Create a new Scene

let gameScene = new Phaser.Scene("Game");

// Setiingt he configuration of the game
let config = {
	width: 640,
	height: 360,
	backgroundColor: "#999999",
	type: Phaser.AUTO,
	scene: gameScene,
};

// Create a new game, pass the configuration
let game = new Phaser.Game(config);
