/**
 * Dragon
 */
class Dragon {
    public x: number;
    public y: number;
    public div: HTMLElement;
    
    
    constructor(parent: HTMLElement) {
        this.div = document.createElement("dragon");
        parent.appendChild(this.div);
               
        
    }
    
    public draw(): void {
        this.div.style.transform ="translate(800px,500px)";
    }
}