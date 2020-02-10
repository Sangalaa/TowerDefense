class Level extends GameObject {
    constructor(root, timerTime, health, money, id) {
        super(root, 0, 0, 0, 0, undefined);
        
        this.currentWave = 0;
        this.waves = undefined;
        this.timerTime = timerTime;
        this.timerPID = undefined;
        this.currentTimerTime = timerTime;
        this.timerIcon = new LabeledIcon(this, 20, 20, 32, 64, Assets.TIMER_IMAGE, "" + this.currentTimerTime, "white", Game.BASIC_FONT_SIZE);
        this.health = health;
        this.money = money;
        this.killedEnemies = 0;
        this.id = id;
        this.scene = [];
        this.gameMenu = new GameMenu(this, root.canvas.width, root.canvas.height);
    }

    addObject(object) {
        if(object == undefined) return;

        this.scene.push(object);
        this.add(object);
    }

    removeObject(object) {
        if(object == undefined) return;

        var index = this.scene.indexOf(object);
        this.scene.splice(index, 1);

        this.remove(object);
    }

    setMap(map) {
        if(map == undefined) return;

        this.map = map;
        this.add(map);
        this.add(this.gameMenu);
    }

    setWaves(waves) {
        if(waves == undefined) return;

        this.waves = waves;
    }

    setFirstInfoMenu(infoMenu) {
        if(infoMenu == undefined) return;

        this.onMouseRemove();
        this.add(infoMenu);
    }

    update() {
        this.timerIcon.update("" + this.currentTimerTime);
        this.notify("update");
    }

    draw(root) {
        this.notify("draw", root);
        root.context.fillStyle = "white";
        root.context.font = Game.BASIC_FONT_SIZE + " " + Game.BASIC_FONT;
        root.context.fillText("Wave: " + ((this.currentWave < this.waves.length) ? this.currentWave + 1 : this.currentWave) + " / " + this.waves.length, this.root.canvas.width - 200, 40, 200);

        if(this.timerPID || this.isGamePaused && !this.waves[this.currentWave].isRunning) {
            this.timerIcon.draw(root);
        }
    }

    startTimer() {
        if(this.timerPID) return;

        this.timerPID = setInterval(function() {
            this.currentTimerTime -= 1;
            this.root.audioManager.playSound(Assets.TIMER_SOUND);
            if(this.currentTimerTime == 0) this.startNextWave();
        }.bind(this), 1000 / this.currentGameSpeed);
    }

    stopTimer() {
        if(this.timerPID == undefined) return;

        clearInterval(this.timerPID);
        this.timerPID = undefined;
    }

    startNextWave() {
        this.root.audioManager.stopPlaying(Assets.TIMER_SOUND);

        if(this.waves[this.currentWave].isRunning) return;
        if(this.timerPID) {
            this.stopTimer();
            this.currentTimerTime = this.timerTime;
        }
        
        this.waves[this.currentWave].startWave();
        this.add(this.waves[this.currentWave]);
    }

    wavePassed() {
        this.waves[this.currentWave ++].isRunning = false;

        if(this.currentWave < this.waves.length - 1) this.startTimer();
        else if(this.currentWave == this.waves.length) this.levelWin();
    }

    levelWin() {
        this.root.audioManager.stopPlayingAllSounds();
        this.root.audioManager.playSound(Assets.WIN_SOUND);

        this.root.onChangeGameSpeed(1);
        this.root.onMouseRemove();

        this.root.add(new WinMenu(this.root, this.root.canvas.width / 4, this.root.canvas.height / 4, this.root.canvas.width / 2, this.root.canvas.height / 2, this.killedEnemies, this.money, this.id));
    }

    levelLose() {
        this.root.onMouseRemove();
        this.root.onGamePause();

        this.root.audioManager.stopPlayingAllSounds();
        this.root.audioManager.playSound(Assets.LOSE_SOUND);

        this.gameMenu.healthIcon.update(this.health);
        this.root.add(new LoseMenu(this.root, this.root.canvas.width / 4, this.root.canvas.height / 4, this.root.canvas.width / 2, this.root.canvas.height / 2, this.currentWave, this.waves.length));
    }

    enemyPassed(enemy) {
        this.health -= enemy.damage;
        this.removeObject(enemy);
        this.notify("enemyKilled", enemy);

        if(this.health <= 0) this.levelLose();
    }

    enemyKilled(enemy) {
        this.money += enemy.moneyPerKill;
        this.killedEnemies ++;
        this.removeObject(enemy);
        this.notify("enemyKilled", enemy);
    }

    onTowerBuild(tower) {
        this.root.audioManager.playSoundInstanced(Assets.TOWER_BUILDING_SOUND);
        
        if(tower.isChangingPosition) return;
        
        this.money -= tower.buyPrice;
        this.notify("onTowerBuild", tower);
    }

    onGamePause() {
        super.onGamePause();
        this.stopTimer();
    }
    
    onGameResume() {
        if(!this.waves[this.currentWave].isRunning && this.isGamePaused) this.startTimer();

        super.onGameResume();
    }

    onChangeGameSpeed(speed) {
        super.onChangeGameSpeed(speed);

        if(this.isGamePaused || !this.waves[this.currentWave] || this.waves[this.currentWave].isRunning) return;
        
        this.stopTimer();
        this.startTimer();
    }
}