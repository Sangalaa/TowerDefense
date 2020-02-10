class SettingsMenu extends Menu {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.WINDOW);

        var crossButton = new Button(this, this.x + this.width - 100, this.y + 15, 50, 50);
        crossButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("cross"), Assets.ACTION_BUTTONS.getTile("crossHover"));
        crossButton.action = function() {
           this.cleanUp();
        }.bind(this);
        this.addMenuElement(crossButton);

        var audioButton = new StateButton(this, crossButton.x, this.y + this.height - 100, 50, 50);
        audioButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("audioOn"), Assets.ACTION_BUTTONS.getTile("audioOnHover"), Assets.ACTION_BUTTONS.getTile("audioOff"), Assets.ACTION_BUTTONS.getTile("audioOffHover"));
        audioButton.action = function() {
            root.audioManager.isMuted = audioButton.isPressed;
        }
        audioButton.isPressed = root.audioManager.isMuted;
        this.addMenuElement(audioButton);

        var restartButton = new Button(this, this.x + this.width / 2 - this.width / 5 + 15, this.y + this.height / 2 - 75 / 2, this.width / 3, 75);
        restartButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("restart"), Assets.BUTTONS.getTile("restartHover"));
        restartButton.action = function() {
            var totalRoot = this.getTotalRoot();
            totalRoot.nodes = [];
            totalRoot.onGameResume();
            totalRoot.levelsMenu.restartLevel();
        }
        this.addMenuElement(restartButton);

        var exitButton = new Button(this, this.x + this.width / 2 - this.width / 5 + 15, this.y + this.height / 2 + 50, this.width / 3, 75);
        exitButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("exit"), Assets.BUTTONS.getTile("exitHover"));
        exitButton.action = function() {
            var totalRoot = this.getTotalRoot();
            totalRoot.nodes = [];
            totalRoot.onGameResume();
            totalRoot.add(totalRoot.levelsMenu);
        }
        this.addMenuElement(exitButton);
    }

    draw(root) {
        super.draw(root);

        root.context.fillStyle = "black";
        root.context.font = Game.BASIC_FONT_SIZE + " " + Game.BASIC_FONT;
        root.context.fillText("Settings", this.x + this.width / 2 - root.context.measureText("Settings").width / 2, this.y + 50, this.width);
    }

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) this.cleanUp();
    }

    cleanUp() {
        var totalRoot = this.getTotalRoot();
        totalRoot.remove(this);
        totalRoot.onMouseAdd(totalRoot.mouse);
        totalRoot.onGameResume();
    }
}