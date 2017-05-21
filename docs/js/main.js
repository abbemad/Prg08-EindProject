var Dragon = (function () {
    function Dragon(parent) {
        this.div = document.createElement("dragon");
        parent.appendChild(this.div);
    }
    Dragon.prototype.draw = function () {
        this.div.style.transform = "translate(800px,500px)";
    };
    return Dragon;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.plane = new Plane(container);
        this.dragon = new Dragon(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.plane.draw();
        this.dragon.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Plane = (function () {
    function Plane(parent) {
        this.div = document.createElement("plane");
        parent.appendChild(this.div);
    }
    Plane.prototype.draw = function () {
        this.div.style.transform = "translate(200px,100px)";
    };
    return Plane;
}());
//# sourceMappingURL=main.js.map