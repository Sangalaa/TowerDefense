class GameAnimation extends GameObject {
    constructor(root, canvasX, canvasY, width, height, image, xTiles, yTiles, tileWidth, tileHeight, maxFrameCount) {
        super(root, canvasX, canvasY, width, height, image);

        this.currentXTile = 0;
        this.currentYTile = 0;
        this.xTiles = xTiles;
        this.yTiles = yTiles;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.currentFrameCount = 0;
        this.maxFrameCount = maxFrameCount;
    }

    update(object) {
        if(object) {
           this.x = object.x;
           this.y = object.y;
        }
        
        this.currentFrameCount ++;

        if(this.currentFrameCount < this.maxFrameCount) return;

        this.currentFrameCount = 0;
        this.currentXTile ++;

        if(this.currentXTile >= this.xTiles) this.currentXTile = 0, this.currentYTile ++;
        if(this.currentYTile >= this.yTiles) this.currentYTile = 0;
    }

    draw(root) {
        root.context.drawImage(this.image, this.currentXTile * this.tileWidth, this.currentYTile * this.tileHeight, this.tileWidth, this.tileHeight, this.x, this.y, this.width, this.height);
    }
}