class Game {

  private plane: Plane;
  private dragon: Dragon;
  

    constructor() {
        let container = document.getElementById("container");
        this.plane = new Plane(container);
        this.dragon = new Dragon(container);
        

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.plane.draw();
        this.dragon.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = new Game();
});