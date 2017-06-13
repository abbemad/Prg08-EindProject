/// <reference path="screens/startScreen.ts"/>

class Game {

    private screen: any;
    private static instance: Game;
    
    private constructor() {
        
    }

    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
            Game.instance.getStartScreen();

        }

        return Game.instance;
    }

    public getStartScreen(): void {
        this.screen = new StartScreen();

    }

    public getPlayScreen(): void {
        this.screen = new PlayScreen();

    }

    public gameOver(): void {
       document.getElementById("current_level").remove();
        this.screen = new GameOver();
    }
}