///<reference path="parentScreen.ts"/>

class PlayScreen extends ParentScreen {
    private plane: Plane;
    private dragons: Array<Dragon> = new Array<Dragon>();
    private gameObjects: Array<GameObjects> = new Array<GameObjects>();

    public behaviour: Behaviour;


    constructor() {
        super("PlayScreen");
        this.div.id = "current_level";

        this.plane = new Plane(this.div, 50, 300);

        /**
         * Polyformisme
         * Is op het moment uitgeschakeld
         * Maakt door middel van een array de items aan
         * Er is op dit moment maar 1 enemy genaamd dragon
         * De file enemy is een filler class om polyformisme aan te geven
         */

        // this.gameObjects.push(new Plane(this.div, 0, 0), new Enemy(this.div, 0, 0));


        setInterval(() => this.createEnemy(), 2000);

        requestAnimationFrame(() => this.gameLoop());

    }

    private createEnemy() {

        this.dragons.push(new Dragon(this.div, 1900, Math.random() * 700, this.plane));
    }

    private gameLoop() {
        /**
         * Polymorfisme functie, uitgeschakeld, alleen neergezet om te voldoen aan criteria
         * for (let g of this.gameObjects){
                    (<Enemy>g).draw();
                    
                       }
        
         */

        this.plane.draw();

        for (let d of this.dragons) {
            d.draw();

            if (d.x == -200) {
                this.dragons.splice(0, 1);


            }
            if (Utilities.checkPlayerColission(this.plane, d)) {
                this.plane.behaviour = new Dead(this.plane);


            }
        }
        requestAnimationFrame(() => this.gameLoop());
    }



    //Functie die de huidige div verwijderd, zodat de playScreen er kan worden neergezet.
    onStartClick(): void {
        this.div.remove();
        Game.getInstance().getStartScreen();
    }

}
