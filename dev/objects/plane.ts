///<reference path="gameObjects.ts"/>
class Plane extends GameObjects implements Subject {
    private observers: Array<Observer> = new Array<Observer>();
    public engineFire: EngineFire;
    public behaviour: Behaviour;
    public score: 0;


    constructor(parent: HTMLElement, x: number, y: number) {
        super(parent, "plane", x, y, 205, 160);

        //Behaviour aanroepen 
        this.behaviour = new Flying(this);

        //eventlistener aanroepen
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));


        //composition
        this.engineFire = new EngineFire(this.div);

    }

    /**
     * GameScore functie
     * Wanneer score boven de 100 komt komt er een voiceline te staan in de console
     * De sendNotifiaciton wordt aangeroepen
     */
    public gameScore() {
        let Gscore = document.getElementById("score");
        Gscore.innerHTML = "score = " + this.score;
        this.score += 0.5;

        if (this.score == 100) {
            this.sendNotifications();
        }
        if (this.score == 200) {
            this.sendNotifications();
        } if (this.score == 300) {
            this.sendNotifications();
        }

    }

    /**
     * De observer send notification functie
     */
    private sendNotifications(): void {
        for (let i = this.observers.length - 1; i > -1; i--) {
            this.observers[i].notify();
        }
    }
    public subscribe(o: Observer): void {
        this.observers.push(o);
    }

    public unsubscribe(o: Observer): void {
        let i: number = this.observers.indexOf(o);
        if (i != -1) {
            this.observers.splice(i, 1);
        }
    }



    private onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);

    }

    public draw(): void {

        this.gameScore();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }


}