let nipperSystem = []; 

function setup(){
    createCanvas(400, 400);
    background(161, 90, 0);

    // Initialize the Nippers
    for (let i = 0; i < 27; i++) {
        let rx = random(15, width - 15);
        let ry = random(15, height - 15);
        let size = random(10, 50);
        nipperSystem[i] = new Nipper(rx, ry, size);
    }
}

function draw(){
    // Fading trail effect
    fill(161, 90, 0, 25);  // Low alpha for fade effect
    rect(0, 0, width, height);

    // Update and display each Nipper
    for (let i = 0; i < nipperSystem.length; i++) {
        nipperSystem[i].move();
        nipperSystem[i].show();
        nipperSystem[i].checkEdges();
        nipperSystem[i].step();
    }
}

class Nipper {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = random(TWO_PI);  // Initial random angle for rotation
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Update angle for rotation effect
        this.angle += 0.05;
    }

    step() {
        strokeWeight(2);
        stroke(0);
        point(this.x, this.y);
    }

    show() {
        // Color change effect based on position
        let dynamicColor = color(
            red(this.color) + sin(frameCount * 0.1) * 50,
            green(this.color) + cos(frameCount * 0.1) * 50,
            blue(this.color)
        );

        fill(dynamicColor);
        noStroke();
        
        // Apply rotation and draw the Nipper
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        triangle(-this.size / 2, 0, this.size / 2, this.size / 2, 0, this.size);
        pop();
    }

    checkEdges() {
        // Reverse direction if hitting edges
        if (this.x < 0 || this.x > width) {
            this.speedX *= -1;
        }
        if (this.y < 0 || this.y > height) {
            this.speedY *= -1;
        }
    }
}
