class ControlsMenu extends Menu {
    constructor(root) {
        super(root, 0, 0, root.canvas.width, root.canvas.height, Assets.CONTROLS_MENU_BACKGROUND);

        var backButton = new Button(this, 70 - 50 / 2, this.height - 70, 50, 50);
        backButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("back"), Assets.ACTION_BUTTONS.getTile("backHover"));
        backButton.action = function() {
            this.cleanUp();
        }.bind(this);
        
        this.addMenuElement(backButton);
    }

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) this.cleanUp();
    }

    cleanUp() {
        this.root.remove(this);
        this.root.add(new StartMenu(this.root));
    }
}