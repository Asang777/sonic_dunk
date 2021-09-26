class Sonic {
  constructor() {
    this.filePath = './assets/images/sonic.png';
    this.x = 100;
    this.y = 200;
    this.widthRatio = 22.58;
    this.heightRatio = 22.12;
    this.size = 2;
    this.width = this.size * this.widthRatio;
    this.height = this.size * this.heightRatio;
    this.rotation = 0;
    this.rotationVelocity = 0.3;
    this.anchor = 0.5;
    this.jumpPower = 80;
    this.velocity = 3.5;
    this.sprite;
  }

  accelerate() {
    this.sprite.rotation += 0.3;
    this.sprite.y += this.velocity;
  }

  jump() {
    if (this.sprite.y > 0) {
      this.sprite.y -= this.jumpPower;
    }
  }
}