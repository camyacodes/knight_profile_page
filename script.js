window.addEventListener('load', function () {
  //canvas setup
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = 1500
  canvas.height = 500

  class Inputhandler {
    constructor(game) {
      this.game = game
      window.addEventListener('keydown', (e) => {
        if (
          (e.key === 'ArrowRight' ||
            e.key == 'ArrowLeft' ||
            e.key == 'ArrowUp') &&
          this.game.keys.indexOf(e.key) === -1
        ) {
          this.game.keys.push(e.key)
        }
        console.log(this.game.keys)
      })
      window.addEventListener('keyup', (e) => {
        if (this.game.keys.indexOf(e.key) > -1) {
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1)
        }
        console.log(this.game.keys)
      })
    }
  }
  //   falling fire
  class Particle {}
  class Player {
    constructor(game) {
      this.game = game
      this.width = 120
      this.height = 216
      this.x = 20
      this.y = 100
      this.speedX = 0
      this.maxSpeed = 4
    }
    update() {
      if (this.game.keys.includes('ArrowRight')) this.speedX = this.maxSpeed
      else if (this.game.keys.includes('ArrowLeft'))
        this.speedX = -this.maxSpeed
      else this.speedX = 0
      this.x += this.speedX
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  class Layer {}
  class background {}
  class UI {}
  class Game {
    constructor(width, height) {
      this.width = width
      this.height = height
      this.player = new Player(this)
      this.input = new Inputhandler(this)
      this.keys = []
    }
    update() {
      this.player.update()
    }
    draw(context) {
      this.player.draw(context)
    }
  }

  const game = new Game(canvas.width, canvas.height)
  //   animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update()
    game.draw(ctx)
    requestAnimationFrame(animate)
  }
  animate()
})
