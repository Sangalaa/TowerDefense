class LevelButton extends StateButton {
    constructor(root, x, y, width, height, text) {
        super(root, x, y, width, height);

        this.text = text;
        this.isLocked = true;

        this.setNormalImages(Assets.LEVEL_IMAGE, Assets.LEVEL_LOCKED_IMAGE, Assets.LEVEL_IMAGE, Assets.LEVEL_HOVER_IMAGE);
    }

    drawNormalImage(root) {
        super.drawNormalImage(root);
        if(this.isLocked) root.context.drawImage(Assets.LOCK_IMAGE, this.x + this.width / 4, this.y + this.height / 4, this.width / 2, this.height / 2);
        else {
            if(this.isHovered) root.context.fillStyle = "#ffec08";
            else root.context.fillStyle = "white";
            root.context.font = Game.BASIC_FONT_SIZE + " " + Game.BASIC_FONT;
            root.context.fillText(this.text, this.x + this.width / 2 - 8, this.y + this.height / 2 + 8, this.width);
        }
    }

    mouseClick(mouse) {
        if(!this.isLocked) {
            super.mouseClick(mouse);
            this.isPressed = true;
        }
    }

    markAsPassed() {
        this.normalImageState2 = Assets.LEVEL_HOVER_IMAGE;
    }

    unlock() {
        this.isLocked = false;
        this.isPressed = true;
    }
}