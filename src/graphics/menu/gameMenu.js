class GameMenu extends Menu {
    constructor(root, canvasWidth, canvasHeight) {
        super(root, 0, canvasHeight - canvasHeight / 4, canvasWidth, canvasHeight / 4, Assets.GAME_PANEL_BACKGROUND);

        var machineGun = new TowerMenuItem(this, 200, 600, 100, 150, new MachineGun(this, 200 + 15, 600 + 40, 70, 70), "Machine gun");
        machineGun.spawnTower = function() {
            var tower = new MachineGun(root, 200 + 15, 600 + 40, root.map.widthStep, root.map.heightStep);
            this.root.add(tower);
            return tower;
        }.bind(this);
        this.addMenuElement(machineGun);

        var greenCannon = new TowerMenuItem(this, 400, 600, 100, 150, new GreenCannon(this, 400 + 15, 600 + 40, 70, 70), "Green Cannon");
        greenCannon.spawnTower = function() {
            var tower = new GreenCannon(root, 400 + 15, 600 + 40, root.map.widthStep, root.map.heightStep);
            this.root.add(tower);
            return tower;
        }.bind(this);
        this.addMenuElement(greenCannon);

        var missileLauncher = new TowerMenuItem(this, 600, 600, 100, 150, new MissileLauncher(this, 600 + 15, 600 + 40, 70, 70), "Missile Launcher");
        missileLauncher.spawnTower = function() {
            var tower = new MissileLauncher(root, 600 + 15, 600 + 40, root.map.widthStep, root.map.heightStep);
            this.root.add(tower);
            return tower;
        }.bind(this);
        this.addMenuElement(missileLauncher);

        var startButton = new Button(this, 850, 600, 100, 50);
        startButton.setTiledImage(Assets.BUTTONS.image, Assets.BUTTONS.getTile("start"), Assets.BUTTONS.getTile("startHover"));
        startButton.action = function() {
            root.startNextWave();
        }
        this.addMenuElement(startButton);

        var pauseButton = new Button(this, 850, 653, 50, 50);
        pauseButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("pause"), Assets.ACTION_BUTTONS.getTile("pauseHover"));
        pauseButton.action = function() {
            playButton.isPressed = false;
            this.getTotalRoot().onChangeGameSpeed(1);
            this.getTotalRoot().onGamePause();
        }.bind(this);
        this.addMenuElement(pauseButton);

        var playButton = new StateButton(this, 900, 653, 50, 50);
        playButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("play"), Assets.ACTION_BUTTONS.getTile("playHover"), Assets.ACTION_BUTTONS.getTile("speed"), Assets.ACTION_BUTTONS.getTile("speedHover"));
        playButton.action = function() {
            if(this.isGamePaused) {
                this.getTotalRoot().onGameResume();
                playButton.isPressed = false;
            }
            else {
                this.getTotalRoot().onChangeGameSpeed((this.currentGameSpeed == 1 ? this.currentGameSpeed * 2 : 1));
            }
        }.bind(this);
        playButton.ignoreGamePause();
        (this.currentGameSpeed == 1) ? playButton.isPressed = false : playButton.isPressed = true;
        this.addMenuElement(playButton);

        var settingsButton = new Button(this, 875, 700, 50, 50);
        settingsButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("settings"), Assets.ACTION_BUTTONS.getTile("settingsHover"));
        settingsButton.action = function() {
            var totalRoot = this.getTotalRoot();
            totalRoot.onMouseRemove();
            totalRoot.onGamePause();
            totalRoot.add(new SettingsMenu(totalRoot, totalRoot.canvas.width / 4 , totalRoot.canvas.height / 4, totalRoot.canvas.width / 2, totalRoot.canvas.height / 2));
        }.bind(this);
        settingsButton.ignoreGamePause();
        this.addMenuElement(settingsButton);

        this.healthIcon = new LabeledIcon(this, 25, 600, 50, 50, Assets.HEALTH_IMAGE, "" + this.root.health, "white", Game.BASIC_FONT_SIZE);
        this.moneyIcon = new LabeledIcon(this, 25, 700, 50, 50, Assets.COIN_IMAGE, "" + this.root.money, "white", Game.BASIC_FONT_SIZE);

        this.add(this.healthIcon);
        this.add(this.moneyIcon);
    }

    update() {
        this.healthIcon.update(this.root.health);
        this.moneyIcon.update(this.root.money);

        super.update();
    }

    mouseClick(mouse) {
        this.notify("mouseClick", mouse, this.root.money);
    }
}