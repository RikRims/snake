import { generateRandomPosition } from './utils.js';

export default class Snake {
    constructor(canvas) {
        this.body = [generateRandomPosition(canvas)];
        this.size = 1;
        this.direction = 'right';
    }

    increaseSize() {
        const newHead = { ...this.body[0] };
        this.moveHead();
        this.body.unshift(newHead);
        this.size += 1;
    }

    moveHead() {
        // Создаем новую голову на основе текущей головы
        let newHead = { x: this.body[0].x, y: this.body[0].y };

        // Определяем новую позицию для головы
        switch (this.direction) {
            case 'right':
                newHead.x += 1;
                break;
            case 'left':
                newHead.x -= 1;
                break;
            case 'up':
                newHead.y -= 1;
                break;
            case 'down':
                newHead.y += 1;
                break;
        }

        // Добавляем новую голову в начало массива тела
        this.body.unshift(newHead);

        // Удаляем последний сегмент тела, так как змея переместилась, а не выросла
        this.body.pop();
    }

    updateDirection(newDirection) {
        this.direction = newDirection;
    }
}