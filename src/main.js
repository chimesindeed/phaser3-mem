import Phaser from 'phaser'

<<<<<<< HEAD
import Preloader from './scenes/Preloader'
=======
import Preloader from './scenese/Preloader'
>>>>>>> 8a5a1933f11efbea9a60869e80737649ad46b840
import Game from './scenes/Game'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Preloader, Game]
}

export default new Phaser.Game(config)
