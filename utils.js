export function checkCollision(snake, canvas) {
    const head = snake.body[0];
    for (let i = 4; i < snake.body.length; i++) {
        if (snake.body[i].x === head.x && snake.body[i].y === head.y) {
            return true;
        }
    }
    return head.x < 0 || head.x >= canvas.width / 10 || head.y < 0 || head.y >= canvas.height / 10;
}

export function generateRandomPosition(canvas) {
    console.log(canvas);
    return {
        x: Math.floor(Math.random() * (canvas.width / 10)),
        y: Math.floor(Math.random() * (canvas.height / 10))
    };
}

