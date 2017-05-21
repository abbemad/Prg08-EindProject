class Plane {
    public x: number;
    public y: number;
    public div: HTMLElement;
    
    
    constructor(parent: HTMLElement){
        this.div = document.createElement("plane");
        parent.appendChild(this.div);
    }
    
    public draw(): void {
        this.div.style.transform ="translate(200px,100px)";
    }
    
}