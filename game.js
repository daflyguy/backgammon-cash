// Define canvas dimensions
const canvasWidth = 800;
const canvasHeight = 600;

// Define the canvas context
let ctx;

// Function to initialize the canvas
function init() {
    // Get the canvas element
    const canvas = document.getElementById("gameCanvas");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    // Set the canvas dimensions
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Get the canvas context
    ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Canvas context not supported!");
        return;
    }

    // Draw the initial board
    drawBoard(ctx);
}

// Function to draw the backgammon board
function drawBoard(ctx) {
    // Draw the outer border
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw the inner board
    ctx.fillStyle = "#D2B48C";
    ctx.fillRect(50, 50, canvasWidth - 100, canvasHeight - 100);

    // Draw the points (triangles)
    drawPoints(ctx);

    // Add other elements like checkers, numbers, etc.
}

// Function to draw the points (triangles)
function drawPoints(ctx) {
    // Define the points array for each player
    const points = [
        [5, 0], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0], // Black's home board
        [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], // Black's outer board
        [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], // White's outer board
        [18, 0], [19, 0], [20, 0], [21, 0], [22, 0], [23, 0], // White's home board
    ];

    // Loop through each point and draw it
    points.forEach(point => {
        const [x, y] = point;
        let xPos, yPos;
        if (y < 12) {
            xPos = x * 50 + 50;
            yPos = (5 - y) * 50 + 50;
        } else {
            xPos = x * 50 + 50;
            yPos = (29 - y) * 50 + 50;
        }
        ctx.fillStyle = "#654321"; // Brown color
        ctx.beginPath();
        ctx.moveTo(xPos, yPos);
        ctx.lineTo(xPos - 25, yPos + 50);
        ctx.lineTo(xPos + 25, yPos + 50);
        ctx.closePath();
        ctx.fill();
    });
}

// Initialize the canvas when the window loads
window.onload = init;
