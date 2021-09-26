class Trap {
  constructor(trapIndex, appWidth, appHeight) {
    this.filePath = './assets/images/eggman.png';
    // this.x = 500 + trapIndex * appWidth/10;
    // this.y = (trapIndex * 10 + Math.random() * appHeight/55);
    this.x = 700 + (trapIndex * 100) + (trapIndex * 100);
    this.y = 100 + Math.random() * appHeight/2;
    this.widthRatio = 51.15;
    this.heightRatio = 45.16;
    this.size = 2;
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
    this.acceleration += 0.015;
    this.sprite.x -= (this.velocity + this.acceleration);
  }
}