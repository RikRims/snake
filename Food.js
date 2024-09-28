import { generateRandomPosition } from './utils.js';

export default class Food {
    constructor(canvas) {
        this.position = generateRandomPosition(canvas);
    }

    checkCollision(head) {
        return head.x === this.position.x && head.y === this.position.y;
    }
    
    updatePosition(canvas) {
        this.position = generateRandomPosition(canvas);
    }
}   