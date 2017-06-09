/// <reference path="startScreen.ts"/>

class Game {
    private screen: any;

    private static instance: Game;
    private score:number = 10;
    
    //vreemde error, heeft geen effect op game
    // moet private zijn voor singleton, update vs code, of update typescript
    private constructor() {

    }
    
    //geen instane aanwezig wordt er een nieuwe gestart
    //functie om startscreen te krijgen
    //Instance weer returnen voor gebruik
    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.getStartScreen();
        }
        return Game.instance;
    }
    
    //functie startscreen om het startscreen te laten maken
    public getStartScreen(): void {
        this.screen = new StartScreen();
    }
    //functie playscreen om het level te kunnen maken waarin je speelt
    public getPlayScreen(): void {
        this.screen = new PlayScreen();
    }
    //functie om de gameover te laten starten, current level in geval er meerdere levels gaan komen
    public gameOver():void{
        document.getElementById("current_level").remove();  
          
        this.screen = new GameOver();
    }

}