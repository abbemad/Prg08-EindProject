/// <reference path="ParentScreen.ts"/>

class GameOver extends ParentScreen {
    constructor() {
        super('gameover');
        let btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "HA, TRY AGAIN!";

        // click
        btn.addEventListener("click", this.onClick.bind(this));

    }

    onClick(): void {
        console.log("retry");
        this.div.remove();
        Game.getInstance().getStartScreen();
    }
}