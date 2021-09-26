
const themeSong = new Howl({
  src: ['./assets/sounds/sonic_gangsta_paradise.mp3'],
  volume: 0.5,
})
themeSong.play();

const winSound = new Howl({
  src: ['./assets/sounds/win.mp3'],
  volume: 0.5,
})

const gameOverSound = new Howl({
  src: ['./assets/sounds/game_over.mp3'],
  volume: 0.5,
})

const getCoinSound = new Howl({
  src: ['./assets/sounds/coin.mp3'],
  volume: 0.5,
})