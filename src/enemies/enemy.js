class Enemy extends GameObject {
    constructor(root, x, y, width, height, id, image, tile, health, damage, moveSpeed, moneyPerKill, movePoints) {
        super(root, x, y, width, height, image);

        this.id = id;
        this.tile = tile;

        this.health = health;
        this.damage = damage;
        this.moveSpeed = moveSpeed;
        this.moneyPerKill = moneyPerKill;
        this.currentMovePoint = undefined;
        this.movePoints = movePoints.slice();
    }

    update() {
        this.getTotalRoot().audioManager.playSound(this.sounds[Enemy.WALKING_SOUND_ID]);
        this.move();
        this.calculateRotation();
    }

    move() {
        this.callEvent(MOVE_EVENT);

        if(this.currentMovePoint == undefined) this.currentMovePoint = this.movePoints.shift();
        if(this.currentMovePoint == undefined) {
            this.getTotalRoot().audioManager.stopPlaying(this.sounds[Enemy.WALKING_SOUND_ID]);
            this.root.enemyPassed(this);
            return;
        }

        var pathX = this.currentMovePoint[0] - this.x;
        var pathY = this.currentMovePoint[1] - this.y;
        var distance = Math.sqrt(pathX * pathX + pathY * pathY);

        if(distance <= this.moveSpeed) {
            this.x = this.currentMovePoint[0];
            this.y = this.currentMovePoint[1];
            this.currentMovePoint = this.movePoints.shift();
        }
        else {
            var directionX = pathX / distance;
            var directionY = pathY / distance;
            this.dx = directionX * this.moveSpeed * this.currentGameSpeed;
            this.dy = directionY * this.moveSpeed * this.currentGameSpeed;
            super.move();
        }
    }

    calculateRotation() {
        if(this.currentMovePoint == undefined) return;
        
        this.currentImageRotation = Math.atan2(this.currentMovePoint[0] - this.x, - (this.currentMovePoint[1] - this.y));
    }

    hit(projectile) {
        this.health -= projectile.damage;

        this.getTotalRoot().audioManager.playSoundInstanced(this.sounds[Enemy.HIT_SOUND_ID]);

        if(this.health <= 0) {
            this.root.enemyKilled(this);
            this.getTotalRoot().audioManager.stopPlaying(this.sounds[Enemy.WALKING_SOUND_ID]);
            this.getTotalRoot().audioManager.playSound(this.sounds[Enemy.DEAD_SOUND_ID]);
        }
    }

    onTowerBuild(tower) {
        tower.enemySpawned(this);
    }
}
Enemy.WALKING_SOUND_ID = 0;
Enemy.HIT_SOUND_ID = 1;
Enemy.DEAD_SOUND_ID = 2;