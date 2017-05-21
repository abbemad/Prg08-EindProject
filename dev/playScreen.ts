/// <reference path="ParentScreen.ts"/>

class PlayScreen extends ParentScreen {

    private plane: Plane;
    private enemy: Enemy;
    //private dragon: Dragon;
   //private dragon2: Dragon;


    constructor() {
        super("PlayScreen");

        this.div.id = "current_level";
        this.plane = new Plane(this.div, 50, 300);
        this.enemy = new Enemy(this.div, 1100, 300);
        //this.dragon = new Dragon(this.div, 100, 200);
       // this.dragon2 = new Dragon(this.div, 300, 500);
       
      
       
       
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.plane.draw();
        this.enemy.draw();
       // this.dragon.draw();
        //this.dragon2.draw();
                  
             


            requestAnimationFrame(() => this.gameLoop());
        }
    }
