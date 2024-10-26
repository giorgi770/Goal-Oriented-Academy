const box = document.querySelector('.box');

let x = 0, y = 0;
const size = 100;  // size of the box (matching your image's proportions)
const speed = 2;   // speed of the movement
const boundary = 500;  // boundary size

function moveBox() {
    if (x < boundary - size && y === 0) {
        x += speed;  // Move right
    } else if (x >= boundary - size && y < boundary - size) {
        y += speed;  // Move down
    } else if (x > 0 && y >= boundary - size) {
        x -= speed;  // Move left
    } else if (x === 0 && y > 0) {
        y -= speed;  // Move up
    }

    box.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveBox);
}

moveBox();
