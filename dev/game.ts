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
//Get startScreen
    public getStartScreen(): void {
        this.screen = new StartScreen();

    }
//Get playscreen
    public getPlayScreen(): void {
        this.screen = new PlayScreen();

    }
//Game over, verwijderd current playfield en start game over scherm
    public gameOver(): void {
       document.getElementById("current_level").remove();
        this.screen = new GameOver();
    }
}