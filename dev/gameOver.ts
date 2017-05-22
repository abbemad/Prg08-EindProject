/// <reference path="ParentScreen.ts"/>

class GameOver extends ParentScreen {
    constructor() {
        super('gameover');
        let btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "HA, TRY AGAIN!";

        // button klik funtie om de onclick functie te gebruiken
        btn.addEventListener("click", this.onClick.bind(this));

    }
    
    //onclick fucntie om de huidige div te verwijderen de game dus en een nieuwe te starten
    onClick(): void {
        console.log("retry");
        this.div.remove();
        Game.getInstance().getStartScreen();
    }
}