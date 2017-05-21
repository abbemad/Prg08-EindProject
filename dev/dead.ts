/**
 * Dead
 */
class Dead implements Behaviour {
    plane: Plane; 
    
    constructor(p: Plane) {
        this.plane = p;
    } 
    
    draw() {
        
        this.plane.y -= 20
        this.plane.x += 4;

    }
    onKeyDown(e: KeyboardEvent) {
        Game.getInstance().gameOver();
        this.plane.behaviour = new Flying(this.plane);

    }
}