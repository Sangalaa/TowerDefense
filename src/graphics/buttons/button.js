class Button extends GameObject {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, undefined);
        
        this.hoverImage = undefined;
        this.normalTile = undefined;
        this.hoverTile = undefined;
        this.isHovered = false;
    }

    action() {}

    draw(root) {
        if(this.normalTile) this.drawTileImage(root);
        else if(this.image) this.drawNormalImages(root);
    }

    setTiledImage(image, normalTile, hoverTile) {
        this.image = image;
        this.normalTile = normalTile;
        this.hoverTile = hoverTile;
    }

    drawTileImage(root) {
        if(!this.isHovered) root.context.drawImage(this.image, this.normalTile.x, this.normalTile.y, this.normalTile.width, this.normalTile.height, this.x, this.y, this.width, this.height);
        else root.context.drawImage(this.image, this.hoverTile.x, this.hoverTile.y, this.hoverTile.width, this.hoverTile.height, this.x, this.y, this.width, this.height);
    }

    setNormalImages(normalImage, hoverImage) {
        this.image = normalImage;
        this.hoverImage = hoverImage;
    }

    drawNormalImages(root) {
        root.context.drawImage((!this.isHovered) ? this.normalImage : this.hoverImage, this.x, this.y, this.width, this.height);
    }

    mouseMove(scene, mouse) {
        var collisions = this.checkCollisions(scene);
        if(this.arrayContains(collisions, mouse)) {
            if(mouse.hoveredObject) mouse.hoveredObject.isHovered = false;
            mouse.hoveredObject = this;
            this.isHovered = true;
            mouse.registeredInThisFrame = true;
        }
        else if(mouse.registeredInThisFrame == false) {
            if(mouse.hoveredObject) mouse.hoveredObject.isHovered = false;
            mouse.hoveredObject = false;
        }
    }

    mouseClick(mouse) {
        if(this.canReactOnGamePause()) return;
        if(this.isHovered) {
            this.action();
            this.getTotalRoot().audioManager.playSound(Assets.BUTTON_CLICK_SOUND);
        }
    }
}