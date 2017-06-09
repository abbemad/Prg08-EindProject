/// <reference path="ParentScreen.ts"/>

class PlayScreen extends ParentScreen {

    private plane: Plane;
    private enemies: Array<Enemy> = new Array<Enemy>();
    //array
    //private enemy: Enemy;

    constructor() {
        super("PlayScreen");
        
        //level krijgt de id current level zodat het level altijd kan worden aangeroepen, ook als er meerdere levels zijn.
        this.div.id = "current_level";
        this.plane = new Plane(this.div, 50, 300);

        setInterval(() => this.createEnemy(), 2000);

        requestAnimationFrame(() => this.gameLoop());
    }

    private createEnemy() {
        console.log("createEnemy wordt aangeroepen")
        this.enemies.push(new Enemy(this.div));
    }




    private gameLoop() {
        this.plane.draw();
        for (let e of this.enemies) {
            e.draw();
            if (Utilities.checkPlayerColission(this.plane, e)) {
                 this.plane.behaviour = new Dead(this.plane);
            }
            for (let e of this.enemies) {
                if (e.x == -200) {
                    this.enemies.splice(0, 1);
                    console.log(this.enemies);
                }
            }
        }




        requestAnimationFrame(() => this.gameLoop());
    }
}
