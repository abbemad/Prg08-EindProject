/**
 * Plane
 */
class Plane extends GameObjects {
    public behaviour: Behaviour;
    
    
    constructor(parent: HTMLElement, x: number, y: number) {
        super(parent, "plane", x, y, 205, 160);
        
        // this.div = document.createElement("plane");
        // parent.appendChild(this.div);
        
        // this.width = 120;
        // this.height = 80;
        
        // this.x = 50;
        // this.y = 300;
        
        this.behaviour = new Flying(this);
        
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        
        
        
        
    }
    
    private onKeyDown(e: KeyboardEvent): void {
        this.behaviour.onKeyDown(e);
        
    }
      
  
    
    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}