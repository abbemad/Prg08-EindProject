/*
 * behaviour voor Dead
 */
class Dead implements Behaviour {
    plane: Plane;

    constructor(p: Plane) {
        this.plane = p;
    }

    //Draw function which makes the plan crash
    draw() {

        this.plane.y -= 20
        this.plane.x += 4;

    }

    /*
     *KeyboardEvent function 
     *Gameover screen 
     *Behaviour stays dead so game bugs out
     *Behaviour needs to set back to flying so the game doesn't bug out
     */

    onKeyDown(e: KeyboardEvent) {
        Game.getInstance().gameOver();
        this.plane.behaviour = new Flying(this.plane);

    }
}