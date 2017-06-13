var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Enumeration;
(function (Enumeration) {
    Enumeration[Enumeration["EASY"] = 5] = "EASY";
    Enumeration[Enumeration["NORMAL"] = 8] = "NORMAL";
    Enumeration[Enumeration["HARD"] = 10] = "HARD";
})(Enumeration || (Enumeration = {}));
var ParentScreen = (function () {
    function ParentScreen(name) {
        this.div = document.createElement(name);
        this.container = document.getElementById('container');
        this.container.appendChild(this.div);
    }
    return ParentScreen;
}());
window.onload = function () {
    var logo = document.getElementById("logo");
    TweenLite.to(logo, 2, { left: "600px", color: "white" });
    var box = document.getElementById("greenBox"), count = 0, tween;
    tween = TweenMax.to(box, 2, { repeat: 8, yoyo: true, onRepeat: onRepeat, repeatDelay: 0.5, ease: Linear.easeNone });
    function onRepeat() {
        count++;
        if (count == 1) {
            box.innerHTML = "The world is in chaos";
        }
        else if (count == 2) {
            box.innerHTML = "Billions of dragons";
        }
        else if (count == 3) {
            box.innerHTML = "Rose from the earth";
        }
        else if (count == 4) {
            box.innerHTML = "The evacuation to a safe haven started";
        }
        else if (count == 5) {
            box.innerHTML = "you are the last vessel";
        }
        else if (count == 6) {
            box.innerHTML = "bring these people to safety";
        }
        else if (count == 7) {
            box.innerHTML = "you are their only hope";
        }
        else if (count == 8) {
            box.innerHTML = "press the ship, to start your journey";
        }
    }
};
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen() {
        _super.call(this, 'start');
        var btn = document.getElementById("logo");
        btn.addEventListener("click", this.onStartClick.bind(this));
    }
    StartScreen.prototype.onStartClick = function () {
        this.div.remove();
        document.getElementById("demo").remove();
        Game.getInstance().getPlayScreen();
    };
    return StartScreen;
}(ParentScreen));
var Game = (function () {
    function Game() {
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
window.addEventListener("load", function () {
    Game.getInstance();
});
var Utilities = (function () {
    function Utilities() {
    }
    Utilities.checkPlayerColission = function (plane, enemy) {
        return (plane.x < enemy.x + enemy.width &&
            plane.x + plane.width > enemy.x &&
            plane.y < enemy.y + enemy.height &&
            plane.height + plane.y > enemy.y);
    };
    return Utilities;
}());
var Dead = (function () {
    function Dead(p) {
        this.plane = p;
        Game.getInstance().gameOver();
        this.plane.behaviour = new Flying(this.plane);
    }
    Dead.prototype.draw = function () { };
    Dead.prototype.onKeyDown = function (e) {
    };
    return Dead;
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
            this.plane.y -= 15;
        }
        else if (e.key == 'ArrowDown' || e.key == 's') {
            this.plane.y += 15;
        }
    };
    return Flying;
}());
var GameObjects = (function () {
    function GameObjects(parent, tagName, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.div = document.createElement(tagName);
        parent.appendChild(this.div);
    }
    GameObjects.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObjects;
}());
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(parent, tag, x, y, width, height) {
        _super.call(this, parent, tag, x, y, 200, 200);
    }
    return Enemy;
}(GameObjects));
var Bat = (function (_super) {
    __extends(Bat, _super);
    function Bat(parent, x, y, s) {
        _super.call(this, parent, "bat", x, y, 205, 160);
        s.subscribe(this);
        this.counter = 0;
        this.difficulty = 0;
    }
    Bat.prototype.notify = function () {
        this.counter++;
        this.voiceLines();
    };
    Bat.prototype.Enum = function () {
        if (this.difficulty == 0) {
            var v = Enumeration.HARD;
            this.x -= v;
        }
        if (this.difficulty == 1) {
            var v = Enumeration.NORMAL;
            this.x -= v;
        }
        if (this.difficulty == 2) {
            var v = Enumeration.EASY;
            this.x -= v;
        }
    };
    Bat.prototype.voiceLines = function () {
        if (this.counter == 1) {
            console.log("Nice score");
        }
        if (this.counter == 2) {
            console.log("Just Keep flying man");
        }
        if (this.counter == 3) {
            console.log("Hmm yes to the stars");
        }
    };
    Bat.prototype.draw = function () {
        this.Enum();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        if (this.x == -200) {
            this.div.remove();
        }
    };
    return Bat;
}(Enemy));
var Dragon = (function (_super) {
    __extends(Dragon, _super);
    function Dragon(parent, x, y, s) {
        _super.call(this, parent, "dragon", x, y, 205, 160);
        s.subscribe(this);
        this.counter = 0;
        this.difficulty = 2;
    }
    Dragon.prototype.notify = function () {
        this.counter++;
        this.voiceLines();
    };
    Dragon.prototype.Enum = function () {
        if (this.difficulty == 0) {
            var v = Enumeration.HARD;
            this.x -= v;
        }
        if (this.difficulty == 1) {
            var v = Enumeration.NORMAL;
            this.x -= v;
        }
        if (this.difficulty == 2) {
            var v = Enumeration.EASY;
            this.x -= v;
        }
    };
    Dragon.prototype.voiceLines = function () {
        if (this.counter == 1) {
            console.log("Nice score");
        }
        if (this.counter == 2) {
            console.log("Just Keep flying man");
        }
        if (this.counter == 3) {
            console.log("Hmm yes to the stars");
        }
    };
    Dragon.prototype.draw = function () {
        this.Enum();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px) scale(-1,1)";
        if (this.x == -200) {
            this.div.remove();
        }
    };
    return Dragon;
}(Enemy));
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
var Plane = (function (_super) {
    __extends(Plane, _super);
    function Plane(parent, x, y) {
        var _this = this;
        _super.call(this, parent, "plane", x, y, 205, 160);
        this.observers = new Array();
        this.score = 0;
        this.behaviour = new Flying(this);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.engineFire = new EngineFire(this.div);
    }
    Plane.prototype.gameScore = function () {
        var Gscore = document.getElementById("score");
        Gscore.innerHTML = "score = " + this.score;
        this.score += 0.5;
        if (this.score == 100) {
            this.sendNotifications();
        }
        if (this.score == 200) {
            this.sendNotifications();
        }
        if (this.score == 300) {
            this.sendNotifications();
        }
    };
    Plane.prototype.sendNotifications = function () {
        for (var i = this.observers.length - 1; i > -1; i--) {
            this.observers[i].notify();
        }
    };
    Plane.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    Plane.prototype.unsubscribe = function (o) {
        var i = this.observers.indexOf(o);
        if (i != -1) {
            this.observers.splice(i, 1);
        }
    };
    Plane.prototype.onKeyDown = function (e) {
        this.behaviour.onKeyDown(e);
    };
    Plane.prototype.draw = function () {
        this.gameScore();
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Plane;
}(GameObjects));
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        _super.call(this, 'gameOver');
        var btn = document.createElement("button");
        this.div.appendChild(btn);
        btn.innerHTML = "HA, TRY AGAIN!";
        btn.addEventListener("click", this.onClick.bind(this));
    }
    GameOver.prototype.onClick = function () {
        this.div.remove();
        Game.getInstance().getPlayScreen();
    };
    return GameOver;
}(ParentScreen));
var PlayScreen = (function (_super) {
    __extends(PlayScreen, _super);
    function PlayScreen() {
        var _this = this;
        _super.call(this, "PlayScreen");
        this.enemies = new Array();
        this.div.id = "current_level";
        this.intervalID = setInterval(function () { return _this.createEnemy(); }, 2800);
        this.plane = new Plane(this.div, 50, 300);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    PlayScreen.prototype.createEnemy = function () {
        this.enemies.push(new Dragon(this.div, 1900, Math.random() * 700, this.plane));
        this.enemies.push(new Bat(this.div, 1900, Math.random() * 700, this.plane));
    };
    PlayScreen.prototype.removeFromArray = function (e) {
        var i = this.enemies.indexOf(e);
        if (i != -1) {
            this.enemies.splice(i, 1);
        }
    };
    PlayScreen.prototype.GameOver = function () {
        clearInterval(this.intervalID);
        console.log("game Over");
        this.plane.behaviour = new Dead(this.plane);
    };
    PlayScreen.prototype.gameLoop = function () {
        var _this = this;
        this.plane.draw();
        var hitDragon = false;
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var d = _a[_i];
            d.draw();
            if (d.x == -200) {
                this.removeFromArray(d);
            }
            else if (Utilities.checkPlayerColission(this.plane, d)) {
                hitDragon = true;
            }
        }
        if (hitDragon) {
            console.log("hit bitch");
            this.GameOver();
        }
        else {
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    PlayScreen.prototype.onStartClick = function () {
        Game.getInstance().getStartScreen();
    };
    return PlayScreen;
}(ParentScreen));
//# sourceMappingURL=main.js.map