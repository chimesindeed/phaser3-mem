
import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {
	constructor(){
		super('preloader')
	}

	preload() {
		this.load.spritesheet('sokoban',
			'textures/sokoban_tilesheet.png',
				{
					frameWidth: 64
				}
		)
	}

	create() {
		this.anims.create({
			key: 'down-idle',
			frames: [{ key: 'sokoban', frame: 52 }]
		})

		this.anims.create({
			key: 'up-idle',
			frames: [{ key: 'sokoban', frame: 55 }]
		})

		this.anims.create({
			key: 'left-idle',
			frames: [{ key: 'sokoban', frame: 81 }]
		})

		this.anims.create({
			key: 'right-idle',
			frames: [{ key: 'sokoban', frame: 78 }]
		})

		this.scene.start('game')
	}

}
