import Snake from './Snake.js';
import Renderer from './Renderer.js';
import { checkCollision } from './utils.js';
import { generateRandomPosition } from './utils.js';
import Food from './Food.js';

export default class Game {
    constructor(canvas) {
        this.snake = new Snake(canvas);
        this.food = new Food(canvas);
        this.renderer = new Renderer(canvas);
        this.gameInterval = null;
    }

    start() {
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
        this.gameInterval = setInterval(() => this.drawGame(), 150);
    }

    drawGame() {
        this.renderer.clear();
        this.snake.moveHead();
        if(this.food.checkCollision(this.snake.body[0])) {
            this.snake.increaseSize();
            document.getElementById('snakeSize').textContent = this.snake.size;
            this.food.updatePosition(this.renderer.canvas);
        }
        this.renderer.drawSnake(this.snake);
        this.renderer.drawFood(this.food);
        if (checkCollision(this.snake, this.renderer.canvas)) {
            this.endGame();
        }
    }

    handleKeyPress(event) {
        const directionMap = {
            'ArrowRight': 'right',
            'ArrowLeft': 'left',
            'ArrowUp': 'up',
            'ArrowDown': 'down'
        };
        const oppositeDirection = {
            'right': 'left',
            'left': 'right',
            'up': 'down',
            'down': 'up'
        };
        const newDirection = directionMap[event.code];
        if (newDirection && newDirection !== this.snake.direction && newDirection !== oppositeDirection[this.snake.direction]) {
            this.snake.updateDirection(newDirection);
        }
    }

    endGame() {
        clearInterval(this.gameInterval);
        const gameOverMessage = document.getElementById('gameOverMessage');
        gameOverMessage.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('restartButton').addEventListener('click', function() {
        location.reload(); // Простой способ перезапустить игру
    });
});
