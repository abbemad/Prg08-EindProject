class GameObjects {
    public div: HTMLElement;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public playScreen: PlayScreen;


    constructor(parent: HTMLElement, tagName: string, x: number, y: number, width: number, height: number) {

        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height;

        this.div = document.createElement(tagName);
        parent.appendChild(this.div);



    }

     public draw(){
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";

        
    }
}