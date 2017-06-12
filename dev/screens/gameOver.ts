/// <reference path="parentScreen.ts"/>

class GameOver extends ParentScreen {
    private plane: Plane;
   
    public behaviour: Behaviour;

    constructor() {
        super('gameOver');
        let btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "HA, TRY AGAIN!";

        // button klik funtie om de onclick functie te gebruiken
        btn.addEventListener("click", this.onClick.bind(this));

    }
    
    //onclick fucntie om de huidige div te verwijderen de game dus en een nieuwe te starten
    onClick(): void {
       this.div.remove();
        //this.plane.behaviour = new Flying(this.plane);
       Game.getInstance().getPlayScreen();
    }
}