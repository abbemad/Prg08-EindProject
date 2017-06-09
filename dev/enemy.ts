/**
 * Enemy
 * 
 *Weird with extending from gameObjects, dinsdag achterhalen waarom
 */
class Enemy {
    public div: HTMLElement;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public playScreen: PlayScreen;



    constructor(parent: HTMLElement) {
        this.div = document.createElement("enemy");
        parent.appendChild(this.div);


        this.y = Math.random() * 800;


        this.width = 120;
        this.height = 80;

        this.x = 1900;
        //this.y = 300;



    }



    public draw(): void {
        this.x -= 5;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px) scale(-1,1)";

        if (this.x == -200) {
            // console.log("ik ben ervoorbij");
            // console.log("verwijder meself")
            this.div.remove();

        }
    }
}