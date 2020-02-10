class StartMenu extends Menu {
    constructor(root) {
        super(root, 0, 0, root.canvas.width, root.canvas.height, Assets.START_MENU_BACKGROUND);

        var halfWidth = root.canvas.width / 2;
        var halfHeight = root.canvas.height / 2;

        var startButton = new Button(this, halfWidth - halfWidth / 4, halfHeight + halfHeight * 0.2, halfWidth / 2, halfHeight / 4);
        startButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("start"), Assets.BUTTONS.getTile("startHover"));
        startButton.action = function() {
            root.remove(this);
            root.add(root.levelsMenu);
        }.bind(this);
        this.addMenuElement(startButton);

        var controlsButton = new Button(this, halfWidth - halfWidth / 4, halfHeight + halfHeight / 2, halfWidth / 2, halfHeight / 4);
        controlsButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("controls"), Assets.BUTTONS.getTile("controlsHover"));
        controlsButton.action = function() {
            root.remove(this);
            root.add(new ControlsMenu(root));
        }.bind(this);
        this.addMenuElement(controlsButton);

        var audioButton = new StateButton(this, this.width - 70, this.height - 70, 50, 50);
        audioButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("audioOn"), Assets.ACTION_BUTTONS.getTile("audioOnHover"), Assets.ACTION_BUTTONS.getTile("audioOff"), Assets.ACTION_BUTTONS.getTile("audioOffHover"));
        audioButton.action = function() {
            root.audioManager.isMuted = audioButton.isPressed;
            console.log(root.audioManager.isMuted);
        }
        audioButton.isPressed = root.audioManager.isMuted;
        this.addMenuElement(audioButton);
    }
}