# WORKSHOP-7-FORKED
I forked https://mirow-l.github.io/Workshop-7/ to create: https://github.com/adra086/WORKSHOP-7-FORKED/

## Key Changes

  ### Dynamic Color Effect:
        The Nippers’ colors change over time using sine and cosine functions to create a smooth oscillation.

```javascript
let dynamicColor = color(
    red(this.color) + sin(frameCount * 0.1) * 50,
    green(this.color) + cos(frameCount * 0.1) * 50,
    blue(this.color)
);
```

### Fading Trail Effect:

    The background is redrawn with a slight transparency in each frame to create a fading trail.

``` javascript
fill(161, 90, 0, 25);  // Fading effect with low alpha
rect(0, 0, width, height);
```

### Bouncing Movement:

    Instead of getting stuck at the edges, the Nippers now bounce back using velocity reversal.

``` javascript
if (this.x < 0 || this.x > width) {
    this.speedX *= -1;
}
if (this.y < 0 || this.y > height) {
    this.speedY *= -1;
}
```

### Rotation Effect:

    Each Nipper rotates as it moves, creating a dynamic and animated effect.

``` javascript
this.angle += 0.05;
```
### Problems & Solutions

I used chatGPT to trouble shoot some problems I had as colors of the Nippers changed too quickly, making the effect too intense.

How ChatGPT Helped: 
ChatGPT explained how sine and cosine functions could be used to create smooth, oscillating color transitions. 
It showed me how to modify the RGB values incrementally over time.
I used sin(frameCount * 0.1) and cos(frameCount * 0.1) to vary the color smoothly
