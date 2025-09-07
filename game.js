const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  backgroundColor: '#222222',
  scene: {
    preload() {},
    create() {
      this.add.text(10,10, 'Click the blue square!', { font: '20px sans-serif', fill: '#fff' });
      this.square = this.add.rectangle(400,300,100,100,0x0077ff).setInteractive();
      this.input.on('gameobjectdown', (pointer, gameObject) => {
        if (gameObject === this.square) {
          const nx = Phaser.Math.Between(60, 740);
          const ny = Phaser.Math.Between(60, 540);
          this.tweens.add({ targets: this.square, x: nx, y: ny, duration: 350, ease: 'Power2' });
        }
      });
    },
    update() {}
  }
};

new Phaser.Game(config);
