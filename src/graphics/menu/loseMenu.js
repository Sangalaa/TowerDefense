class LoseMenu extends Menu {
    constructor(root, x, y, width, height, currentWave, totalWaves) {
        super(root, x, y, width, height, Assets.WINDOW);

        this.currentWave = currentWave;
        this.totalWaves = totalWaves;

        var restartButton = new Button(this, this.x + this.width / 2 - this.width / 5 + 15, this.y + this.height / 2 - 75 / 2, this.width / 3, 75);
        restartButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("restart"), Assets.BUTTONS.getTile("restartHover"));
        restartButton.action = function() {
            var totalRoot = this.getTotalRoot();
            totalRoot.nodes = [];
            totalRoot.audioManager.stopPlayingAllSounds();
            totalRoot.onGameResume();
            totalRoot.levelsMenu.restartLevel();
        }
        this.addMenuElement(restartButton);

        var exitButton = new Button(this, this.x + this.width / 2 - this.width / 5 + 15, this.y + this.height / 2 + 50, this.width / 3, 75);
        exitButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("exit"), Assets.BUTTONS.getTile("exitHover"));
        exitButton.action = function() {
            this.getTotalRoot().audioManager.stopPlayingAllSounds();
            this.cleanUp();
        }.bind(this);
        this.addMenuElement(exitButton);
    }

    draw(root) {
        super.draw(root);

        var text = "Wave " + (this.currentWave + 1) + " / " + this.totalWaves;

        root.context.fillStyle = "black";
        root.context.font = Game.BASIC_FONT_SIZE + " " + Game.BASIC_FONT;
        root.context.fillText("Lose", this.x + this.width / 2 - root.context.measureText("Lose").width / 2, this.y + 50, this.width);
        root.context.fillText(text, this.x + this.width / 2 - root.context.measureText(text).width / 2, this.y + this.height / 3, this.width);
    }

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) this.cleanUp();
    }

    cleanUp() {
        var totalRoot = this.getTotalRoot();
        totalRoot.nodes = [];
        totalRoot.onGameResume();
        totalRoot.add(totalRoot.levelsMenu);
    }
}