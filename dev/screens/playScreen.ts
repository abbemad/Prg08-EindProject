///<reference path="parentScreen.ts"/>

class PlayScreen extends ParentScreen {
    private plane: Plane;
    private enemies: Array<Enemy> = new Array<Enemy>();
    // private gameObjects: Array<GameObjects> = new Array<GameObjects>();
    private intervalID: number;

    public behaviour: Behaviour;


    constructor() {
        super("PlayScreen");
        this.div.id = "current_level";
        this.intervalID = setInterval(() => this.createEnemy(), 2800);

        this.plane = new Plane(this.div, 50, 300);

        requestAnimationFrame(() => this.gameLoop());
    }

    private createEnemy() {

        this.enemies.push(new Dragon(this.div, 1900, Math.random() * 700, this.plane));
        this.enemies.push(new Bat(this.div, 1900, Math.random() * 700, this.plane));
    }

    public removeFromArray(e: Enemy) {
        let i: number = this.enemies.indexOf(e);
        if (i != -1) {
            this.enemies.splice(i, 1);
        }
    }

//functie gameover zorg voor nieuwe behaviour, gameover interval van createEnemy clearen
    private GameOver(): void {
        clearInterval(this.intervalID);
        console.log("game Over");
        this.plane.behaviour = new Dead(this.plane);
        //this.div.remove();

    }

    private gameLoop() {

        this.plane.draw();
        let hitDragon: boolean = false;

        for (let d of this.enemies) {
            d.draw();

            if (d.x == -200) {
               this.removeFromArray(d);

            } else if (Utilities.checkPlayerColission(this.plane, d)) {
                hitDragon = true;
                // this.plane.behaviour = new Dead(this.plane);
                // this.div.remove();

            }
        }

        //when hitDragon true wordt doe   . . . 

        if (hitDragon) {
            console.log("hit bitch");
            this.GameOver();
        } else {
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    //Functie die de huidige div verwijderd, zodat de playScreen er kan worden neergezet.
    onStartClick(): void {
        
        Game.getInstance().getStartScreen();
    }

}
