import p5 from 'p5'

export default function initP5() {
    console.log('initialized.');
    return new p5(script);
}

const script = (p) => {
    p.preload = () => {

    }

    let points = [[0, 0]];
    p.setup = () => {
        let canvas = p.createCanvas(window.innerWidth, window.innerHeight).parent('p5Canvas');
        p.background(240);
    }

    p.draw = () => {
        
        if (p.frameCount % 10 == 0) {
            p.fill(255);
            p.stroke(0);
            var r = p.random(16, 128);
            p.ellipse(p.random(p.width), p.random(p.height), r, r);
        }

        points.forEach( (point) => {
            p.fill(0);
            p.ellipse(point[0], point[1], 32, 32);
        })
    }

    p.mousePressed = () => {
        points.push([p.mouseX, p.mouseY]);
    }

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    p.testFunction = () => {
        console.log('Hello');
    }
}
