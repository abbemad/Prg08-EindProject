///<reference path="gameObjects.ts"/>
/// <reference path="enemy.ts" />

class Bat extends Enemy implements Observer {
    
    public enum: Enumeration;
    public plane: Plane;
    private counter: number;
    private difficulty: number;

    constructor(parent: HTMLElement, x: number, y: number, s: Subject) {
        super(parent, "bat", x, y, 205, 160);
        s.subscribe(this);

        this.counter = 0;
        this.difficulty = 0;

    }
    /**
     * de notify functie
     * verhoogt de counter iedere keer wanneer deze wordt aangeroepen
     * Roep changegame functie aan
    */

    public notify() {
        this.counter++;
        this.voiceLines();
    }

    /**
     * Enum om de moeilijkheid aan te passen
     * Uitbreiding wordt dat de speler de difficulty zelf kan kiezen
     */
    public Enum() {

        if (this.difficulty == 0) {
            let v: Enumeration = Enumeration.HARD;
            this.x -= v;
        } if (this.difficulty == 1) {
            let v: Enumeration = Enumeration.NORMAL;
            this.x -= v;
        } if (this.difficulty == 2) {
            let v: Enumeration = Enumeration.EASY;
            this.x -= v;


        }
    }

    /*
    *Functie die wordt aangeroepen wanneer een notification wordt verstuurd
    *In de console komt een zinnetje te staan
    */
    public voiceLines() {

        if (this.counter == 1) {
            console.log("Nice score");

        } if (this.counter == 2) {
            console.log("Just Keep flying man");

        } if (this.counter == 3) {
            console.log("Hmm yes to the stars");

        }
    }



    public draw(): void {
        this.Enum();

        // this.x -= 5;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";

        if (this.x == -200) {
            this.div.remove();
        }
    }
}