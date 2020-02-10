class WinMenu extends Menu {
    constructor(root, x, y, width, height, killedEnemies, money, levelId) {
        super(root, x, y, width, height, Assets.WINDOW);

        this.levelId = levelId;

        var skullIcon = new LabeledIcon(this, this.x + this.width / 2 - 25, this.y + 100, 50, 50, Assets.SKULL_IMAGE, "" + killedEnemies, "black", "22pt");
        var coinIcon = new LabeledIcon(this, this.x + this.width / 2 - 25, this.y + 170, 50, 50, Assets.COIN_IMAGE, "" + money, "black", "22pt");

        var okButton = new Button(this, this.x + this.width / 2 - this.width / 6, this.y + this.height / 2 + 60, this.width / 3, 75);
        okButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("ok"), Assets.BUTTONS.getTile("okHover"));
        okButton.action = function() {
            this.cleanUp();
        }.bind(this);

        var medailImage = new GameObject(this, this.x + this.width - 100, this.y + 20, 50, 50, Assets.ACTION_BUTTONS.image);
        medailImage.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("levelWin"));

        this.addMenuElement(okButton);

        this.add(skullIcon);
        this.add(coinIcon);
        this.add(medailImage);
    }

    draw(root) {
        super.draw(root);

        root.context.fillStyle = "black";
        root.context.font = Game.BASIC_FONT_SIZE + " " + Game.BASIC_FONT;
        root.context.fillText("Victory", this.x + this.width / 2 - root.context.measureText("Victory").width / 2, this.y + 50, this.width);
    }

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) this.cleanUp();
    }

    cleanUp() {
        var totalRoot = this.getTotalRoot();
        totalRoot.nodes = [];
        totalRoot.add(totalRoot.levelsMenu);
        totalRoot.levelsMenu.levelWin(this.levelId);
    }
}