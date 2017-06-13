/*
 * behaviour voor Dead
 */
class Dead implements Behaviour {
    plane: Plane;

    constructor(p: Plane) {
        this.plane = p;
        Game.getInstance().gameOver();
        //document.getElementById("current_level").remove();
        this.plane.behaviour = new Flying(this.plane);
    }

  
    draw() {

    }

    onKeyDown(e: KeyboardEvent) {
        console.log("keypressed");


    }
}