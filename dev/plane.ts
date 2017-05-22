/**
 * Plane
 */
class Plane extends GameObjects {
    public behaviour: Behaviour;
    public engineFire: EngineFire;
    
    
    constructor(parent: HTMLElement, x: number, y: number) {
        super(parent, "plane", x, y, 205, 160);
       
        //Behaviour aanroepen 
        this.behaviour = new Flying(this);
        
        //eventlistener aanroepen
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        
        //composition aan plane binden
        this.engineFire = new EngineFire(this.div);
        
        
    }
    //keybdown functie wanneer er een knop wordt ingedrukt wordt er wat gedaan
    private onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);
        
    }
      
  
    
    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}