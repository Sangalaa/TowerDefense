class TowerMenuItem extends Menu {
	constructor(root, x, y, width, height, towerInstance, headline) {
		super(root, x, y, width, height, undefined);

		this.towerInstance = towerInstance;
		this.towerInstance.radiusColor = undefined;

		this.towerButton = new StateButton(this, x, y, width, height);
		this.towerButton.setNormalImages(Assets.LEVEL_IMAGE, Assets.LEVEL_HOVER_IMAGE, Assets.LEVEL_HOVER_IMAGE, Assets.LEVEL_HOVER_IMAGE);

		this.infoButton = new Button(this, x + 50, y, 50, 50);
		this.infoButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("info"), Assets.ACTION_BUTTONS.getTile("infoHover"));
		this.infoButton.action = function () {
			var totalRoot = this.getTotalRoot();
			totalRoot.onMouseRemove();
			totalRoot.onGamePause();
			totalRoot.add(new TowerInfoMenu(totalRoot, totalRoot.canvas.width / 4, totalRoot.canvas.height / 4, totalRoot.canvas.width / 2, totalRoot.canvas.height / 2, this.towerInstance, headline, undefined));
		}.bind(this);
		this.infoButton.ignoreGamePause();

		this.priceLabel = new LabeledIcon(this, this.x + 20, this.y + this.height / 1.4, 20, 20, Assets.COIN_IMAGE, "" + this.towerInstance.buyPrice, "white", "15pt");

		this.addMenuElement(this.towerButton);
		this.addMenuElement(this.towerInstance);
		this.addMenuElement(this.infoButton);

		this.add(this.priceLabel);
	}

	spawnTower() {}

	draw(root) {
		if (this.towerInstance.constructor.isUnlocked) super.draw(root);
	}

	mouseMove(scene, mouse) {
		if (this.towerInstance.constructor.isUnlocked) super.mouseMove(scene, mouse);
	}

	mouseClick(mouse, money) {
		super.mouseClick(mouse);
		
		if (this.canReactOnGamePause()) return;
		if (!this.towerInstance.constructor.isUnlocked) return;
		if (this.towerInstance.buyPrice > money) return;
		if (mouse.selectedObject && mouse.selectedObject.isChangingPosition) return;

		if (!this.towerButton.isHovered) return;
		if (!mouse.selectedObject) mouse.selectedObject = this.spawnTower();
		else {
			if (mouse.selectedObject.isBuild) return;

			this.unselectTower(mouse);
		}
	}

	onTowerBuild(tower) {
		this.towerButton.isPressed = false;
	}

	unselectTower(mouse) {
		this.root.root.remove(mouse.selectedObject);
		mouse.selectedObject = undefined;
	}

	keyPressed(keys) {
		if(keys[KEYBOARD_ESC]) {
			var root = this.getTotalRoot();
			if(root.mouse.selectedObject && !root.mouse.selectedObject.isBuild) {
				this.towerButton.isPressed = false;
				this.unselectTower(root.mouse);
			}
		}
	}
}