class Projectile extends GameObject {
    constructor(root, x, y, width, height, image, tile, animation, target, speed, damage, targetEnemies) {
        super(root, x, y, width, height, image);

        this.target = target;
        this.tile = tile;
        this.animation = animation;
        this.speed = speed;
        this.damage = damage;
        this.targetEnemies = targetEnemies;

        this.calculateDirection();
    }

    draw(root) {
        super.draw(root);

        if(this.animation) this.animation.draw(root);
    }

    move() {
        super.move();
        this.callEvent(MOVE_EVENT);
    }

    update() {
        this.move();

        if(this.animation) this.animation.update(this);
        
        this.checkCollisions();
        this.checkWorldBoundaries();
    }

    checkCollisions() {
        var enemies = super.checkCollisions(this.root.scene);

        for(var enemy in enemies) {
            if(!(enemies[enemy] instanceof Enemy)) continue;

            for(var e in this.targetEnemies) {
                if(this.targetEnemies[e] == enemies[enemy].id) {
                    enemies[enemy].hit(this);
                    this.root.removeObject(this);
                    return;
                }
            }
        }
    }

    checkWorldBoundaries() {
        if(this.x + this.width < 0 || this.y + this.height < 0 || this.x > this.getTotalRoot().canvas.width || this.y > this.getTotalRoot().canvas.height) this.root.removeObject(this);
    }

    calculateDirection() {
        if(this.target == undefined) return;
        
        var pathX = this.target.x + this.target.width / 2 - (this.x + this.width / 2);
        var pathY = this.target.y + this.target.height / 2 - (this.y + this.height / 2);
        var distance = Math.sqrt(pathX * pathX + pathY * pathY);
        var directionX = pathX / distance;
        var directionY = pathY / distance;

        this.dx = directionX * this.speed * this.currentGameSpeed;
        this.dy = directionY * this.speed * this.currentGameSpeed;
    }

    enemyKilled(enemy) {
        if(enemy == this.target) this.target = undefined;
    }
}