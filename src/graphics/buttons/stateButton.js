class StateButton extends Button {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height);

        this.imageState1 = undefined;
        this.hoverImageState1 = undefined;
        this.imageState2 = undefined;
        this.hoverImageState2 = undefined;
        this.normalTileState1 = undefined;
	    this.hoverTileState1 = undefined;
	    this.normalTileState2 = undefined;
	    this.hoverTileState2 = undefined;
	    this.isPressed = false;
    }

    draw(root) {
        if(this.normalTileState1) this.drawTiledImage(root);
        else if(this.normalImageState1) this.drawNormalImage(root);
    }

    setTiledImage(image, normalTileState1, hoverTileState1, normalTileState2, hoverTileState2) {
        this.image = image;
        this.normalTileState1 = normalTileState1;
        this.hoverTileState1 = hoverTileState1;
        this.normalTileState2 = normalTileState2;
        this.hoverTileState2 = hoverTileState2;
    }

    drawTiledImage(root) {
        var tile;

        if(!this.isPressed)
            if(!this.isHovered) tile = this.normalTileState1;
            else tile = this.hoverTileState1;
        else
            if(!this.isHovered) tile = this.normalTileState2;
            else tile = this.hoverTileState2;

        root.context.drawImage(this.image, tile.x, tile.y, tile.width, tile.height, this.x, this.y, this.width, this.height);
    }

    setNormalImages(normalImageState1, hoverImageState1, normalImageState2, hoverImageState2) {
        this.normalImageState1 = normalImageState1;
        this.hoverImageState1 = hoverImageState1;
        this.normalImageState2 = normalImageState2;
        this.hoverImageState2 = hoverImageState2;
    }

    drawNormalImage(root) {
        var image;

        if(!this.isPressed)
            if(!this.isHovered) image = this.normalImageState1;
            else image = this.hoverImageState1;
        else
            if(!this.isHovered) image = this.normalImageState2;
            else image = this.hoverImageState2;

        root.context.drawImage(image, this.x, this.y, this.width, this.height);
    }
    
    mouseClick(mouse) {
        if(this.canReactOnGamePause()) return;

        if(this.isHovered) this.isPressed = !this.isPressed;
        super.mouseClick(mouse);
    }
}