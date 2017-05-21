/**
 * Plane
 */
class Plane extends GameObjects {
    // public div: HTMLElement;
    // public x: number;
    // public y: number;
    // public width: number;
    // public height: number;
    
    
    constructor(parent: HTMLElement, x: number, y: number) {
        super(parent, "plane", x, y, 205, 160);
        
        // this.div = document.createElement("plane");
        // parent.appendChild(this.div);
        
        // this.width = 120;
        // this.height = 80;
        
        // this.x = 50;
        // this.y = 300;
        
        
        
    }
    
    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}