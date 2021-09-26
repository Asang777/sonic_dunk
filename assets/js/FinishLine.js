class FinishLine {
  constructor(appHeight) {
    this.filePath = './assets/images/finishLine.png';
    this.x = 0;
    this.y = 0;
    this.rotation = 1.56;
    this.width = appHeight;
    this.height = 80;
    this.velocity = 2;
    this.acceleration = 0;
    this.anchor = 0;
    this.sprite;
  }

  accelerate() {
    this.acceleration += 0.01;
    this.sprite.x -= (this.velocity + this.acceleration);
  }
}