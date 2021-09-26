const GAME_OVER_TEXT = 'Game Over!';
const WINNING_TEXT = 'You Win!';
const appHeight = window.innerHeight;
const appWidth = window.innerWidth;

let latestRingXPosition = 0;
let score = 0;
let scoreText;

// Level determine the traps amount
const level = {
  'easy': 10,
  'medium': 30,
  'hard': 60,
  'expert': 70,
  'sonic must die': 100,
}

const trapCount = level[localStorage.getItem('level') ?? 'medium'];

const ringCount = 300;

const Application = PIXI.Application;
const app = new Application({
  transparent: false,
  antialias: true,
});
app.renderer.backgroundColor = 0x23395D;
app.renderer.resize(appWidth, appHeight);
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view);

const text = new Text();
const sonic = new Sonic(appHeight);
sonic.sprite = generateSprite(sonic, app);
sonic.sprite.interactive = true;
sonic.sprite.buttonMode = true;

sonic.sprite.on('pointerdown', () => {
  sonic.jump()
})

const traps = [];
for (let i = 0; i < trapCount; i++) {
  const trap = new Trap(i, appWidth, appHeight);
  trap.sprite = generateSprite(trap, app);
  traps.push(trap);
}

const rings = [];
const finishLine = new FinishLine(appHeight);
for (let i = 0; i < ringCount; i++) {
  const ring = new Ring(i, appWidth, appHeight, ringCount);
  latestRingXPosition = ring.x;
  ring.sprite = generateSprite(ring, app);
  rings.push(ring);
  if (i == (ringCount - 1)) {
    finishLine.x = latestRingXPosition + (ring.size * ring.widthRatio);
  }
}
finishLine.sprite = generateSprite(finishLine, app);

document.addEventListener('click', () => {
  sonic.jump();
});

document.addEventListener('touchstart', () => {
  sonic.jump();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    sonic.jump();
  }
});

app.ticker.add((delta) => loop(delta));
scoreText = generateText(`Score: ${Math.ceil(score)}`, text.style, 0, 0, app);
const loop = (delta) => {
  sonic.accelerate();
  finishLine.accelerate();

  if (sonic.sprite.y < 0) {
    sonic.sprite.y = 0;
  }

  rings.forEach((ring, id) => {
    ring.accelerate();
    if (detectCollission(sonic.sprite, ring.sprite)){
      getCoinSound.play();
      app.stage.removeChild(ring.sprite);
      rings.splice(id, 1);
      score += ring.acceleration;
      scoreText.text = `Score: ${Math.ceil(score)}`;
    }
  })
  
  traps.forEach((trap) => {
    trap.accelerate();
    if (detectCollission(sonic.sprite, trap.sprite)){
      endGame(appWidth, text.size, text.lineSpacing, GAME_OVER_TEXT, text.style, score, app, themeSong, scoreText, gameOverSound);
    }
  })
  
  if (detectCollission(sonic.sprite, finishLine.sprite, true)){
    endGame(appWidth, text.size, text.lineSpacing, WINNING_TEXT, text.style, score, app, themeSong, scoreText, winSound);
  }
  
  if (sonic.sprite.y >= appHeight) {
    endGame(appWidth, text.size, text.lineSpacing, GAME_OVER_TEXT, text.style, score, app, themeSong, scoreText, gameOverSound); 
  }
}

