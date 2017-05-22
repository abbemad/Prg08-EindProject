/// <reference path="ParentScreen.ts"/>

class StartScreen extends ParentScreen {
    constructor() {
        super('start');

        //Knop om de game te starten
        let btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "START";


        //Een event listener zodat wanneer op de knop wordt geklikt de onstart functie wordt aangeroepen.
        btn.addEventListener("click", this.onStartClick.bind(this));

    }

    //Functie die de huidige div verwijderd, zodat de playScreen er kan worden neergezet.
    onStartClick(): void {
        this.div.remove();
        Game.getInstance().getPlayScreen();
    }
}