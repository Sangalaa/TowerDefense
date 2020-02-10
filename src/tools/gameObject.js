class GameObject extends Node {
    constructor(root, x, y, width, height, image) {
        super();

        this.events = {};

        this.root = root;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.width = width;
        this.height = height;
        this.image = image;
        this.tile = undefined;
        this.currentImageRotation = 0;
        this.imageRotation = 0;
        this.sounds = [];
        this.currentGameSpeed = this.getTotalRoot().currentGameSpeed;
        this.isGamePaused = false;
        this.canIgnoreGamePause = false;
    }

    setImageRotation(rotationInDegrees) {
        this.imageRotation = rotationInDegrees * TO_RADIANS;
    }

    setTiledImage(image, tile) {
        this.image = image;
        this.tile = tile;
    }

    canReactOnGamePause() {
        return this.isGamePaused && !this.canIgnoreGamePause;
    }

    ignoreGamePause() {
        this.canIgnoreGamePause = true;
    }

    mouseMove(scene, mouse) {
        this.notify("mouseMove", scene, mouse);
    }
	mouseClick(mouse) {
        this.notify("mouseClick", mouse);
    }

	keyPressed(keys) {
        this.notify("keyPressed", keys);
    }

    keyReleased(keys) {
        this.notify("keyReleased", keys);
    }
    
	checkCollisions(scene) {
        if(scene == undefined) return undefined;

        var collidingObjects = [];

        for(var index in scene) {
            var object = scene[index];

            if(object.x >= this.x && object.x <= this.x + this.width && object.y >= this.y && object.y <= this.y + this.height) collidingObjects.push(object);
        }

        return collidingObjects;
    }

    draw(root) {
        if(this.image == undefined) return;
        
        root.context.save();
        root.context.translate(this.x, this.y);
        root.context.translate(this.width / 2, this.height / 2);
        root.context.rotate(this.currentImageRotation + this.imageRotation);
        
        if(this.tile == undefined) root.context.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
        else root.context.drawImage(this.image, this.tile.x, this.tile.y, this.tile.width, this.tile.height, -this.width / 2, -this.height / 2, this.width, this.height);
        
        root.context.restore();
    }
    
    update() {}

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }
    
	addSound(id, sound) {
        if(sound == undefined) return;
        if(id == undefined) return;

        this.sounds[id] = sound;
    }

    onGamePause() {
        this.isGamePaused = true;
        this.notify("onGamePause");
    }
    
    onGameResume() {
        this.isGamePaused = false;
        this.notify("onGameResume");
    }
    
    onChangeGameSpeed(speed) {
        this.currentGameSpeed = speed;
        this.notify("onChangeGameSpeed", speed);
    }

    onMouseAdd(mouse) {
        this.notify("onMouseAdd", mouse);
    }

    onMouseRemove() {
        this.notify("onMouseRemove");
    }
    
    arrayContains(array, object) {
        for(var index in array) {
            if(array[index] == object) return true;
        }
        return false;
    }

    getTotalRoot() {
        return this.root.getTotalRoot();
    }

    addEventListener(name, action) {
        if(this.events.hasOwnProperty(name)) this.events[name].push(action);
        else this.events[name] = [action];
        
    }

    callEvent(name, args) {
        if(!this.events.hasOwnProperty(name)) return;

        if(!args || args.length == 0) args = [];

        var event = this.events[name];

        for(var i = 0; i < event.length; i ++) event[i].apply(null, args);
    }
}