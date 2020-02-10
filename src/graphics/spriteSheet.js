class Spritesheet {
    constructor(imageName) {
        this.image = new Image();
        this.image.src = imageName;

        this.tiles = [];
    }

    add(tile) {
        if(tile == undefined) return;
        this.tiles.push(tile);
    }

    getTile(name) {
        for(var index in this.tiles) {
            if(this.tiles[index].name == name) return this.tiles[index];
        }

        return undefined;
    }
}