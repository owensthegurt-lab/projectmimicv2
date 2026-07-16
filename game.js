/*
====================================
PROJECT MIMIC
====================================
*/

class Game {

    constructor() {

        console.log("Project Mimic");

        this.running = true;

        this.lastTime = performance.now();

        this.loop();

    }

    loop = () => {

        if (!this.running)
            return;

        const now = performance.now();

        const delta = (now - this.lastTime) / 1000;

        this.lastTime = now;

        this.update(delta);

        this.render();

        requestAnimationFrame(this.loop);

    }

    update(delta) {

        // Update everything

    }

    render() {

        // Render everything

    }

}

const game = new Game();
