class InfoMenu extends Menu {
    constructor(root, x, y, width, height, entity, headline, nextMenu) {
        super(root, x, y, width, height, Assets.WINDOW);

        this.headline = headline;
        this.nextMenu = nextMenu;

        var crossButton = new Button(this, this.x + this.width - 100, this.y + 15, 50, 50);
        crossButton.setTiledImage(Assets.ACTION_BUTTONS.image, Assets.ACTION_BUTTONS.getTile("cross"), Assets.ACTION_BUTTONS.getTile("crossHover"));
        crossButton.action = function() {
            this.cleanUp();
        }.bind(this);
        this.addMenuElement(crossButton);

        this.frameBackground = new GameObject(this, this.x + 40, this.y + this.height / 2 - 150 / 2 - 10, 100, 150, Assets.LEVEL_IMAGE);

        this.info = this.createInfo(entity);

        this.add(this.frameBackground);
    }

    draw(root) {
        super.draw(root);

        root.context.fillStyle = "black";
        root.context.font =  "15pt " + Game.BASIC_FONT;

        root.context.fillText(this.headline, this.x + this.width / 2 - root.context.measureText(this.headline).width / 2, this.y + 50, this.width);

        this.printInfo(root, this.x + this.width / 2.5, this.y + this.height / 3, 25);
    }

    printInfo(root, x, y, padding) {
        var currentPadding = 0;

        for(var i in this.info) {
            root.context.fillText(this.info[i], x, y + currentPadding, this.width / 2);
            currentPadding += padding;
        }
    }

    createInfo(entity) {}

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) this.cleanUp();
    }

    cleanUp() {
        var totalRoot = this.getTotalRoot();
        this.root.remove(this);
            
        if(this.nextMenu) this.root.add(this.nextMenu);
        else {
            totalRoot.onMouseAdd(totalRoot.mouse);
            totalRoot.onGameResume();
        }
    }
}