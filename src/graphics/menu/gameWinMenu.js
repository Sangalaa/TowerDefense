class GameWinMenu extends Menu {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.WINDOW);

        var okButton = new Button(this, this.x + this.width / 2 - this.width / 6, this.y + this.height / 2 + 60, this.width / 3, 75);
        okButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("ok"), Assets.BUTTONS.getTile("okHover"));
        okButton.action = function() {
            this.cleanUp();
        }.bind(this);
        this.addMenuElement(okButton);

        var medailImage = new GameObject(this, this.x + this.width - 100, this.y + 20, 50, 50, Assets.ACTION_BUTTONS.image);
        medailImage.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("gameWin"));

        this.add(medailImage);
    }

    draw(root) {
        super.draw(root);

        root.context.fillStyle = "black";
        root.context.font = Game.BASIC_FONT_SIZE + " " + Game.BASIC_FONT;
        root.context.fillText("Victory", this.x + this.width / 2 - root.context.measureText("Victory").width / 2, this.y + 50, this.width);
        
        var text = "Congratulation, you have won all levels!";
        root.context.font = "18pt " + Game.BASIC_FONT;
        root.context.fillText(text, this.x + this.width / 2 - root.context.measureText(text).width / 2, this.y + this.height / 2, this.width);
    }

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) this.cleanUp();
    }

    cleanUp() {
        var totalRoot = this.getTotalRoot();
        totalRoot.nodes = [];
        totalRoot.add(totalRoot.levelsMenu);
        totalRoot.onMouseAdd(totalRoot.mouse);
    }
}