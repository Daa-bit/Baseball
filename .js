const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let batPosition = 200;
let isSwinging = false;

// Draw the field and bat
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the baseball field (simple representation)
    ctx.fillStyle = '#a0d68d'; // Field color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the bat
    ctx.fillStyle = 'brown';
    ctx.fillRect(batPosition, 300, 100, 20); // Bat
    
    if (isSwinging) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(batPosition + 100, 295, 20, 10); // Swing effect
    }
}

// Event listener for space bar
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        isSwinging = true;
        setTimeout(() => {
            isSwinging = false; // Reset swing effect after a short duration
        }, 100);
        draw(); // Re-draw after swing
    }
});

// Initial draw
draw();
