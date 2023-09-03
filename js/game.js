// Create a new Scene

let gameScene = new Phaser.Scene("Game");

// Initializing the Prameter

gameScene.init = function () {
	this.playerSpeed = 3;
};

// Load assets
gameScene.preload = function () {
	this.load.image("background", "assets/background.png");
	this.load.image("player", "assets/player.png");
	this.load.image("enemy", "assets/dragon.png");
	this.load.image("gold", "assets/treasure.png");
};

gameScene.create = function () {
	// Create Sprite
	let bg = this.add.sprite(0, 0, "background");

	bg.setPosition(
		this.sys.game.config.width / 2,
		this.sys.game.config.height / 2
	);

	// crate Player
	this.player = this.add
		.sprite(40, this.sys.game.config.height / 2, "player")
		.setScale(0.6);

	// Add sprite Dragon
	this.enemy1 = this.add
		.sprite(250, this.sys.game.config.height / 2, "enemy")
		.setScale(0.6);
	this.enemy1.flipX = true;
	// this.enemy1["angle"] = 45;

	// The goal
	this.goal = this.add
		.sprite(
			this.sys.game.config.width - 80,
			this.sys.game.config.height / 2,
			"gold"
		)
		.setScale(0.6);
};

// Update up to 60 times per second

gameScene.update = function () {
	if (this.input.activePointer.isDown) {
		this.player.x += this.playerSpeed;
	}
};

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
