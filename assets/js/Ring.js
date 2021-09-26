class Ring {
  constructor(ringIndex, appWidth, appHeight, ringCount) {
    this.filePath = './assets/images/ring.png';
    this.xStartPointGap = 200;
    this.yBoundaryLimiter = 100;
    this.latestRingXPosition = 0;
    this.xGap = appWidth / ringCount;
    this.x = this.xStartPointGap + (ringIndex * 100) + (ringIndex * this.xGap);
    this.y = this.yBoundaryLimiter + Math.random() * appHeight/2;
    this.widthRatio = 74.34;
    this.heightRatio = 45.13;
    this.size = 0.5;
    this.width = this.size * this.widthRatio;
    this.height = this.size * this.heightRatio;
    this.velocity = 2;
    this.rotation = 0;
    this.rotationVelocity = 0;
    this.acceleration = 0;
    this.anchor = 0.5;
    this.sprite;
  }

  accelerate() {
    this.acceleration += 0.01;
    this.sprite.x -= (this.velocity + this.acceleration);
  }
}