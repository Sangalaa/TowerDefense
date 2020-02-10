class TowerMenu extends Menu {
    constructor(root, tower) {
        super(root, undefined, undefined, tower.width * 2.5, tower.height * 2.5);

        this.tower = tower;

        this.moveButton = new Button(this, tower.x, tower.y, 50, 50);
        this.moveButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("move"), Assets.ACTION_BUTTONS.getTile("moveHover"));
        this.moveButton.action = function() {
            if(this.root.money < this.tower.movePrice) return;

            this.root.money -= this.tower.movePrice;
            this.tower.replace();
            this.root.notify("onTowerDestroy", this.tower);
            this.tower.hideMenu();

            this.getTotalRoot().audioManager.playSound(Assets.COINS_SOUND);
        }.bind(this);

        this.moveButtonLabel = new LabeledIcon(this, this.moveButton.x, this.moveButton.y + this.moveButton.height, 20, 20, Assets.COIN_IMAGE, "" + this.tower.movePrice, "white", "10pt", 5);
        this.add(this.moveButtonLabel);

        this.deleteButton = new Button(this, tower.x + 100, tower.y, 50, 50);
        this.deleteButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("trash"), Assets.ACTION_BUTTONS.getTile("trashHover"), "10pt");
        this.deleteButton.action = function() {
            if(this.root.money < this.tower.destroyPrice) return;

            this.root.money -= this.tower.destroyPrice;
            this.tower.hideMenu();
            this.root.notify("onTowerDestroy", this.tower);
            this.getTotalRoot().mouse.selectedObject = undefined;
            this.getTotalRoot().audioManager.playSoundInstanced(Assets.TOWER_DESTROY_SOUND);
            this.root.remove(this.tower);

            this.getTotalRoot().audioManager.playSound(Assets.COINS_SOUND);
        }.bind(this);

        this.deleteButtonLabel = new LabeledIcon(this, this.deleteButton.x, this.deleteButton.y + this.deleteButton.height, 20, 20, Assets.COIN_IMAGE, "" + this.tower.destroyPrice, "white", 5);
        this.add(this.deleteButtonLabel);

        this.addMenuElement(this.moveButton);
        this.addMenuElement(this.deleteButton);
    }

    calculateNewPosition() {
        this.x = this.tower.x - this.width / 4;
        this.y = this.tower.y - this.height / 4;

        this.moveButton.x = this.x;
        this.moveButton.y = this.y;
        this.deleteButton.x = this.x + this.width - this.deleteButton.width - 15;
        this.deleteButton.y = this.y;
        this.moveButtonLabel.x = this.moveButton.x;
        this.moveButtonLabel.y = this.moveButton.y + this.moveButton.height;
        this.deleteButtonLabel.x = this.deleteButton.x;
        this.deleteButtonLabel.y = this.deleteButton.y + this.deleteButton.height;
    }
}