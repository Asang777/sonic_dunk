class Text {
  constructor() {
    this.size = 38;
    this.lineSpacing = 3;
    this.style = new PIXI.TextStyle({
      fontFamily: "Monsterrat",
      fontSize: this.size,
      fill: 'white',
      stroke: 'black',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowDistance: 10,
      dropShadowAngle: Math.PI / 2,
      dropShadowBlur: 4,
      dropShadowColor: 'black',
    });
  }
}