/**
 * EngineFire
 */
class EngineFire {
    private div: HTMLElement;
    public x: number;
    public y: number;
    

    constructor(parent: HTMLElement) {
        this.div = document.createElement("engineFire");
        parent.appendChild(this.div);

        this.x = 0;
        this.y = 0;
        


    }
    public draw(): void {

        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }

}