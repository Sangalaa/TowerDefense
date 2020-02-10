class LevelsMenu extends Menu {
    constructor(root) {
        super(root, 0, 0, root.canvas.width, root.canvas.height, Assets.START_MENU_BACKGROUND);

        this.levelButtons = [];
        
        this.restartLevel = undefined;

        this.wonGame = false;

        var halfWidth = this.width / 2;
        var halfHeight = this.height / 2;

        var window = new GameObject(this, halfWidth / 4, halfHeight / 4, halfWidth * 1.5, halfHeight * 1.5, Assets.WINDOW);
        this.add(window);

        var level1Button = new LevelButton(this, halfWidth / 2.5, halfHeight / 2.5, 100, 100, "1");
        this.levelButtons.push(level1Button);
        level1Button.unlock();
        level1Button.action = function() {
            var level1 = new Level1(root);
            root.remove(this);
            root.add(level1);
            this.restartLevel = level1Button.action;
        }.bind(this);

        var level2Button = new LevelButton(this, halfWidth - 70, halfHeight / 2.5, 100, 100, "2");
        this.levelButtons.push(level2Button);
        level2Button.action = function() {
            var level2 = new Level2(root);
            root.remove(this);
            root.add(level2);
            this.restartLevel = level2Button.action;
        }.bind(this);

        var level3Button = new LevelButton(this, halfWidth + halfWidth / 2.5 - 30, halfHeight / 2.5, 100, 100, "3");
        this.levelButtons.push(level3Button);
        level3Button.action = function() {
            var level3 = new Level3(root);
            root.remove(this);
            root.add(level3);
            this.restartLevel = level3Button.action;
        }.bind(this);

        var backButton = new Button(this, 70 - 50 / 2, this.height - 70, 50, 50);
        backButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("back"), Assets.ACTION_BUTTONS.getTile("backHover"));
        backButton.action = function() {
            this.cleanUp();
        }.bind(this);
        
        this.addMenuElement(backButton);
        this.addMenuElement(level1Button);
        this.addMenuElement(level2Button);
        this.addMenuElement(level3Button);
    }

    levelWin(id) {
        this.levelButtons[id].markAsPassed();

        if(!this.levelButtons[id + 1]) {
            this.showWinGameScreen();
            return;
        }

        this.levelButtons[id + 1].unlock();
    }

    showWinGameScreen() {
        if(!this.wonGame) {
            this.root.onMouseRemove();
            this.root.add(new GameWinMenu(this.root, this.root.canvas.width / 4, this.root.canvas.height / 4, this.root.canvas.width / 2, this.root.canvas.height / 2));
        }
        this.wonGame = true;
    }

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) this.cleanUp();
    }

    cleanUp() {
        this.root.remove(this);
        this.root.add(new StartMenu(this.root));
    }
}