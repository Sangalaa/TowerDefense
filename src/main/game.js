class Game extends GameObject {
    constructor(canvasID) {
        var canvas = document.getElementById(canvasID);
        var context = canvas.getContext("2d");

        super(undefined, 0, 0, canvas.width, canvas.height, undefined);

        this.canvas = canvas;
        this.context = context;
        this.mouse = new Mouse(this);
        this.audioManager = new AudioManager();
        this.levelsMenu = new LevelsMenu(this);
        this.currentGameSpeed = 1;
        this.keys = [];

        this.context.font = Game.BASIC_FONT_SIZE + " " + Game.BASIC_FONT;

        this.audioManager.playSound(Assets.BACKGROUND_SOUND_1);
    }

    start() {
        this.add(new StartMenu(this));
        requestAnimationFrame(this.loop.bind(this));
    }

    loop() {
        if(!this.isGamePaused) this.update();

        this.mouse.update();

        this.draw(this);

        requestAnimationFrame(this.loop.bind(this));
    }

    update() {
        this.notify("update");
    }

    draw(root) {
        this.context.clearRect(this.x, this.y, this.width, this.height);

        this.notify("draw", this);
    }

    onGamePause() {
        super.onGamePause();
        this.audioManager.stopPlayingAllSounds();
    }

    onGameResume() {
        super.onGameResume();
        this.audioManager.playSound(Assets.BACKGROUND_SOUND_1);
    }

    keyPressed(key) {
        if(this.keys[key]) return;

        this.keys[key] = true;
        super.keyPressed(this.keys);
    }

    keyReleased(key) {
        this.keys[key] = false;
        super.keyReleased(this.keys);
    }

    getTotalRoot() {
        return this;
    }
}

Game.BASIC_FONT_SIZE = "24pt";
Game.BASIC_FONT = "Arial";