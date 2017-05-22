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
    
    
    constructor(parent: HTMLElement) {
        this.div = document.createElement("enemy");
        parent.appendChild(this.div);
        
        this.width = 120;
        this.height = 80;
        
        this.x = 700;
        this.y =  300;
        
        
        
    }
    
    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}