class Flying implements Behaviour {
    plane: Plane;

    constructor(p: Plane) {
        this.plane = p;
    }

    draw() {
        
      
    }


    onKeyDown(e: KeyboardEvent) {
        console.log("keypressed");
        
        if (e.key == 'ArrowUp' || e.key == 'w') {
            console.log("up pressed");
            this.plane.y -= 15;
        } else if (e.key == 'ArrowDown' || e.key == 's') {
            console.log("down key pressed");
            this.plane.y += 15;
           }else if (e.key == 'b') {
               this.plane.behaviour = new Dead(this.plane);
           }
          
    }
    
}