class Wave extends GameObject {
    constructor(root, spawnSpeed) {
        super(root, undefined, undefined, undefined, undefined, undefined);

        this.enemies = [];
        this.enemiesCount = 0;
        this.spawnSpeed = spawnSpeed;
        this.spawnPID = undefined;
        this.isRunning = false;
    }

    addEnemy(enemy) {
        if(enemy == undefined) return;

        this.enemies.push(enemy);
        this.enemiesCount ++;
    }

    spawnEnemy() {
        var enemy = this.enemies.shift();
        if(enemy == undefined) return;

        enemy.onChangeGameSpeed(this.root.currentGameSpeed);
        this.root.addObject(enemy);
        this.root.notify("enemySpawned", enemy);
    }

    startTimer() {
        if(this.spawnPID) return;

        this.spawnPID = setInterval(this.spawnEnemy.bind(this), this.spawnSpeed * 1000 / this.currentGameSpeed);
    }

    stopTimer() {
        if(this.spawnPID == undefined) return;

        clearInterval(this.spawnPID);
        this.spawnPID = undefined;
    }

    startWave() {
        this.isRunning = true;
        this.currentGameSpeed = this.root.currentGameSpeed;
        this.startTimer();
        this.getTotalRoot().audioManager.playSound(Assets.WAVE_SOUND);
    }

    enemyKilled(enemy) {
        this.enemiesCount -= 1;
        if(this.enemiesCount == 0) this.root.wavePassed();
    }

    enemyPassed(enemy) {
        this.enemyKilled(enemy);
    }

    onGamePause() {
        this.stopTimer();
        super.onGamePause();
    }
    
    onGameResume() {
        this.startTimer();
        super.onGameResume();
    }
    
    onChangeGameSpeed(speed) {
        super.onChangeGameSpeed(speed);

        this.stopTimer();
        this.startTimer();
    }
}