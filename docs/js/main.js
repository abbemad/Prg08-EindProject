var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dead = (function () {
    function Dead(p) {
        this.plane = p;
    }
    Dead.prototype.draw = function () {
        this.plane.y -= 20;
        this.plane.x += 4;
    };
    Dead.prototype.onKeyDown = function (e) {
        Game.getInstance().gameOver();
        this.plane.behaviour = new Flying(this.plane);
    };
    return Dead;
}());
var Enemy = (function () {
    function Enemy(parent) {
        this.div = document.createElement("enemy");
        parent.appendChild(this.div);
        this.width = 120;
        this.height = 80;
        this.x = 700;
        this.y = 300;
    }
    Enemy.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Enemy;
}());
var EngineFire = (function () {
    function EngineFire(parent) {
        this.div = document.createElement("engineFire");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 0;
    }
    EngineFire.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return EngineFire;
}());
var Flying = (function () {
    function Flying(p) {
        this.plane = p;
    }
    Flying.prototype.draw = function () {
    };
    Flying.prototype.onKeyDown = function (e) {
        console.log("keypressed");
        if (e.key == 'ArrowUp' || e.key == 'w') {
            console.log("up pressed");
            this.plane.y -= 15;
        }
        else if (e.key == 'ArrowDown' || e.key == 's') {
            console.log("down key pressed");
            this.plane.y += 15;
        }
        else if (e.key == 'b') {
            this.plane.behaviour = new Dead(this.plane);
        }
    };
    return Flying;
}());
var ParentScreen = (function () {
    function ParentScreen(name) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);
    }
    return ParentScreen;
}());
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen() {
        _super.call(this, 'start');
        var btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "START";
        btn.addEventListener("click", this.onStartClick.bind(this));
    }
    StartScreen.prototype.onStartClick = function () {
        this.div.remove();
        Game.getInstance().getPlayScreen();
    };
    return StartScreen;
}(ParentScreen));
var Game = (function () {
    function Game() {
        this.score = 10;
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.getStartScreen();
        }
        return Game.instance;
    };
    Game.prototype.getStartScreen = function () {
        this.screen = new StartScreen();
    };
    Game.prototype.getPlayScreen = function () {
        this.screen = new PlayScreen();
    };
    Game.prototype.gameOver = function () {
        document.getElementById("current_level").remove();
        this.screen = new GameOver();
    };
    return Game;
}());
var GameObjects = (function () {
    function GameObjects(parent, name, x, y, width, heigth) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = heigth;
        this.div = document.createElement(name);
        parent.appendChild(this.div);
    }
    GameObjects.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObjects;
}());
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        _super.call(this, 'gameover');
        var btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "HA, TRY AGAIN!";
        btn.addEventListener("click", this.onClick.bind(this));
    }
    GameOver.prototype.onClick = function () {
        console.log("retry");
        this.div.remove();
        Game.getInstance().getStartScreen();
    };
    return GameOver;
}(ParentScreen));
window.addEventListener("load", function () {
    Game.getInstance();
});
var Plane = (function (_super) {
    __extends(Plane, _super);
    function Plane(parent, x, y) {
        var _this = this;
        _super.call(this, parent, "plane", x, y, 205, 160);
        this.behaviour = new Flying(this);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.engineFire = new EngineFire(this.div);
    }
    Plane.prototype.onKeyDown = function (e) {
        this.behaviour.onKeyDown(e);
    };
    Plane.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Plane;
}(GameObjects));
var PlayScreen = (function (_super) {
    __extends(PlayScreen, _super);
    function PlayScreen() {
        var _this = this;
        _super.call(this, "PlayScreen");
        this.div.id = "current_level";
        this.plane = new Plane(this.div, 50, 300);
        this.enemy = new Enemy(this.div, 1100, 300);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    PlayScreen.prototype.gameLoop = function () {
        var _this = this;
        this.plane.draw();
        this.enemy.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return PlayScreen;
}(ParentScreen));
//# sourceMappingURL=main.js.map