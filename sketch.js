function setup() {
  createCanvas(600, 600);

angleMode(0);

describe('Two eyes that follow the cursor.');
}

function draw() {
    background(0);

    

// Top Eye
    //sclera
    fill('white');
    ellipse(315, 100, 315, 103);
    // Top Eye movement
    let topAngle = atan2(mouseY - 100, mouseX - 315);
    let topIrisX = 315 + cos(topAngle) * 15;
    let topIrisY = 100 + sin(topAngle) * 15;
    //iris
    fill('purple');
    circle(topIrisX, topIrisY, 100);
    //pupil
    fill('black');
    circle(topIrisX, topIrisY, 65);
    //glint
    fill('white');
    ellipse(topIrisX - 20, topIrisY - 10, 25, 8);
    noFill();
   
//Middle Eye
    //sclera
    fill('white');
    ellipse(315, 300, 315, 103);
    // Middle Eye movement
    let midAngle = atan2(mouseY - 300, mouseX - 315);
    let midIrisX = 315 + cos(midAngle) * 15;
    let midIrisY = 300 + sin(midAngle) * 15;
    //iris
    fill('purple');
    circle(midIrisX, midIrisY, 100);
    //pupil
    fill('black');
    circle(midIrisX, midIrisY, 65);
    //glint
    fill('white');
    ellipse(midIrisX - 20, midIrisY - 10, 25, 8);
    noFill();
    
//Bottom Eye
    //sclera
    fill('white');
    ellipse(315, 500, 315, 103);
    // Bottom Eye movement
    let botAngle = atan2(mouseY - 500, mouseX - 315);
    let botIrisX = 315 + cos(botAngle) * 15;
    let botIrisY = 500 + sin(botAngle) * 15;
    //iris
    fill('purple');
    circle(botIrisX, botIrisY, 100);
    //pupil
    fill('black');
    circle(botIrisX, botIrisY, 65);
    //glint
    fill('white');
    ellipse(botIrisX - 20, botIrisY - 10, 25, 8);
    noFill();
    let angle = atan2(mouseY - 100, mouseX - 315);
    
    
    // Top Eye eyelids (curved inner part)
    fill(0);
    // Upper eyelid - outer curve
    arc(315, 100, 315, 160, PI + 0.3, TWO_PI - 0.3, CHORD);
    // Upper eyelid - inner curve 
    arc(315, 100, 315, 110, PI + 0.6, TWO_PI - 0.6, CHORD);

    // Lower eyelid - outer curve
    arc(315, 100, 315, 160, 0.3, PI - 0.3, CHORD);
    // Lower eyelid - inner curve 
    arc(315, 100, 315, 110, 0.6, PI - 0.6, CHORD);

    // Middle Eye eyelids 
    fill(0);
    arc(315, 300, 315, 160, PI + 0.3, TWO_PI - 0.3, CHORD);
    arc(315, 300, 315, 110, PI + 0.6, TWO_PI - 0.6, CHORD);
    arc(315, 300, 315, 160, 0.3, PI - 0.3, CHORD);
    arc(315, 300, 315, 110, 0.6, PI - 0.6, CHORD);

    // Bottom Eye eyelids 
    fill(0);
    arc(315, 500, 315, 160, PI + 0.3, TWO_PI - 0.3, CHORD);
    arc(315, 500, 315, 110, PI + 0.6, TWO_PI - 0.6, CHORD);
    arc(315, 500, 315, 160, 0.3, PI - 0.3, CHORD);
    arc(315, 500, 315, 110, 0.6, PI - 0.6, CHORD);

    // Curves between eyes
    stroke('white');
    strokeWeight(4);
    noFill();

    // Curve towards upper eye (above top eye)
    beginShape();
    curveVertex(315 - 120, 40);
    curveVertex(315 - 60, 60);
    curveVertex(315, 30);
    curveVertex(315 + 60, 60);
    curveVertex(315 + 120, 40);
    endShape();

    // Curve between top and middle eye
    beginShape();
    curveVertex(315 - 120, 200);
    curveVertex(315 - 60, 200);
    curveVertex(315, 180);
    curveVertex(315 + 60, 200);
    curveVertex(315 + 120, 200);
    endShape();

    // Curve between middle and bottom eye
    beginShape();
    curveVertex(315 - 120, 400);
    curveVertex(315 - 60, 400);
    curveVertex(315, 380);
    curveVertex(315 + 60, 400);
    curveVertex(315 + 120, 400);
    endShape();

    // Curve towards lower eye (below bottom eye)
    beginShape();
    curveVertex(315 - 120, 560);
    curveVertex(315 - 60, 540);
    curveVertex(315, 570);
    curveVertex(315 + 60, 540);
    curveVertex(315 + 120, 560);
    endShape();

    noStroke();
    
    // Crescent moons on each side of the eyes

    function drawCrescent(x, y, size, angle, color1, color2) {
        push();
        translate(x, y);
        rotate(angle);
        noStroke();
        fill(color1);
        ellipse(0, 0, size, size);
        fill(color2);
        ellipse(size * 0.25, 0, size * 0.8, size * 0.8);
        pop();
    }

    // Top eye crescents
    drawCrescent(315 - 180, 100, 60, PI / 2, 'yellow', 'black'); // left
    drawCrescent(315 + 180, 100, 60, -PI / 2, 'yellow', 'black'); // right

    // Middle eye crescents
    drawCrescent(315 - 180, 300, 60, PI / 2, 'yellow', 'black'); // left
    drawCrescent(315 + 180, 300, 60, -PI / 2, 'yellow', 'black'); // right

    // Bottom eye crescents
    drawCrescent(315 - 180, 500, 60, PI / 2, 'yellow', 'black'); // left
    drawCrescent(315 + 180, 500, 60, -PI / 2, 'yellow', 'black'); // right
}