export default class Renderer {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawSnake(snake) {
        this.ctx.fillStyle = 'green';
        snake.body.forEach(segment => {
            this.ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
        });
    }

    drawFood(food) {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(food.position.x * 10, food.position.y * 10, 10, 10);
    }

    gameOverMessage() {
        const gameOverMessage = document.getElementById('gameOverMessage');
        gameOverMessage.style.display = 'block';
    }
}
