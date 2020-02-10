this.onload = function() {
    var game = new Game("canvas");

    this.addEventListener("mousemove", function(event) {
        game.mouse.x = event.layerX - game.canvas.offsetLeft;
        game.mouse.y = event.layerY - game.canvas.offsetTop;

        game.mouse.registeredInThisFrame = false;

        game.notify("mouseMove", game.scene, game.mouse);
    });

    this.addEventListener("click", function() {
        game.notify("mouseClick", game.mouse);
    });

    this.addEventListener("keydown", function(event) {
        game.keyPressed(event.keyCode || event.which);
    });

    this.addEventListener("keyup", function(event) {
        game.keyReleased(event.keyCode || event.which);
    });

    game.start();
}