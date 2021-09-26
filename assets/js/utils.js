const detectCollission = (object1, object2, isFinishLine = false) => {
  let object1Bounds = object1.getBounds();
  let object2Bounds = object2.getBounds();
  if (isFinishLine) {
    return object1Bounds.x + object1Bounds.width > object2Bounds.x &&
          object1Bounds.x < object2Bounds.x + object2Bounds.width &&
          object1Bounds.y + object1Bounds.height > object2Bounds.y && 
          object1Bounds.y < object2Bounds.y + object2Bounds.height; 
  }
  return object1Bounds.x + object1Bounds.width/2 > object2Bounds.x &&
          object1Bounds.x < object2Bounds.x + object2Bounds.width/2 &&
          object1Bounds.y + object1Bounds.height/2 > object2Bounds.y && 
          object1Bounds.y < object2Bounds.y + object2Bounds.height/2; 
}

const generateText = (text, textStyle, textPositionX, textPositionY, app) => {
  const textToGenerate = new PIXI.Text(text, textStyle);
  textToGenerate.position.x = textPositionX;
  textToGenerate.position.y = textPositionY;
  app.stage.addChild(textToGenerate);
  return textToGenerate;
}

const generateSprite = (spriteObject, app) => {
  const sprite = PIXI.Sprite.from(spriteObject.filePath);
  sprite.position.x = spriteObject.x;
  sprite.position.y = spriteObject.y;
  sprite.width = spriteObject.width;
  sprite.height = spriteObject.height;
  if (spriteObject.rotation) {
    sprite.rotation = spriteObject.rotation;
  }
  if (spriteObject.anchor) {
    sprite.anchor.set(spriteObject.anchor);
  }
  app.stage.addChild(sprite);
  return sprite
}

const endGame = (appWidth, fontSize, textLineSpacing, endGameTitle, textStyle, score, app, themeSong, scoreText, sound) => {
  const endGameTextXPosition = (appWidth/2 - fontSize);
  const endGameText = generateText(endGameTitle, textStyle, endGameTextXPosition, 0, app);
  const currentHighscore = localStorage.getItem('highscore');
  if (!currentHighscore || currentHighscore < score) {
    localStorage.setItem('highscore', score);
  }
  const scoreTextEnd = generateText(`Score: ${Math.ceil(score)}`, textStyle, endGameTextXPosition, (endGameText.position.y + fontSize + textLineSpacing), app);
  generateText(`Highscore: ${Math.ceil(localStorage.getItem('highscore'))}`, textStyle, endGameTextXPosition, (scoreTextEnd.position.y + fontSize + textLineSpacing), app);
  app.stage.removeChild(scoreText);
  app.ticker.stop();
  themeSong.stop();

  (async() => {
    sound.play();
    await sleep(10000);
    location.href='/';
  })();
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}