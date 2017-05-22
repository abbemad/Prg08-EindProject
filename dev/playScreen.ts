/// <reference path="ParentScreen.ts"/>

class PlayScreen extends ParentScreen {

    private plane: Plane;
    private enemy: Enemy;
  

    constructor() {
        super("PlayScreen");
        
        //level krijgt de id current level zodat het level altijd kan worden aangeroepen, ook als er meerdere levels zijn.
        this.div.id = "current_level";
        this.plane = new Plane(this.div, 50, 300);
        this.enemy = new Enemy(this.div)
       
      
       
       
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.plane.draw();
        this.enemy.draw();
        
        
        //functie om te kijken of er een collsion is en log dan wat, aangezien er nog niks verder mee wordt gedaan
        if (Utilities.checkPlayerColission(this.plane, this.enemy)) {
                console.log("hij raakte mij man")
                }
            
      

            requestAnimationFrame(() => this.gameLoop());
        }
    }
