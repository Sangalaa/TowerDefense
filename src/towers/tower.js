class Tower extends GameObject {
    constructor(root, x, y, width, height, image, tile, imageRotation, radiusOfFire, baseTile, shootingSpeed, buyPrice, movePrice, destroyPrice, descriptionText, targetEnemies) {
        super(root, x, y, width, height, image);

        this.tile = tile;
        this.radiusOfFire = radiusOfFire;
        this.radiusColor = "green";
        this.setImageRotation(imageRotation);
        this.baseTile = baseTile;
        this.shootingSpeed = shootingSpeed;
        this.shootingPID = undefined;
        this.buyPrice = buyPrice;
        this.movePrice = movePrice;
        this.destroyPrice = destroyPrice;
        this.isBuild = false;
        this.menu = new TowerMenu(root, this);
        this.descriptionText = descriptionText;
        this.targetEnemies = targetEnemies;
        this.drawRadius = false;
        this.isChangingPosition = false;
    }

    replace() {
        this.isBuild = false;
        this.isChangingPosition = true;
        this.getTotalRoot().mouse.selectedObject = this;
    }
    
    mouseClick(mouse) {}
    mouseMove(scene, mouse) {}

    update() {
        if(this.target) {
            this.currentImageRotation = calculateRotationBetweenTwoPoints(this.x, this.y, this.target.x, this.target.y);
            this.callEvent(TURRENT_ROTATE_EVENT); 
        }
        if(this.target && calculateDistance(this.target.x, this.target.y, this.x, this.y) > this.radiusOfFire) this.target = undefined;

        this.shoot();
    }

    spawnProjectile(target) {}

    shoot() {
        if(!this.isBuild) return;
        if(this.shootingPID) return;

        for(var index in this.nodes) {
            var enemy = this.nodes[index];

            var distance = calculateDistance(enemy.x, enemy.y, this.x, this.y);

            if(distance < this.radiusOfFire) {
                this.startFiring(enemy);
            }
        }
    }

    startFiring(enemy) {
        if(this.shootingPID) return;

        this.target = enemy;
        if(this.target.health <= 0) this.enemyKilled(enemy);

        var projectile = this.spawnProjectile(enemy);

        this.root.addObject(projectile);

        this.getTotalRoot().audioManager.playSoundInstanced(this.sounds[Tower.SHOOT_SOUND_ID]);

        this.shootingPID = setInterval(this.stopFiring.bind(this), this.shootingSpeed * 1000 / this.currentGameSpeed);
    }

    stopFiring() {
        if(!this.shootingPID) return;

        clearInterval(this.shootingPID);
        this.shootingPID = false;
    }

    draw(root) {
        root.context.drawImage(this.image, this.baseTile.x, this.baseTile.y, this.baseTile.width, this.baseTile.height, this.x, this.y, this.width, this.height);

        super.draw(root);

        if((!this.isBuild || this.drawRadius) && this.radiusColor) {
            root.context.globalAlpha = 0.2;
            root.context.fillStyle = this.radiusColor;

            root.context.beginPath();
            root.context.arc(this.x + this.width / 2, this.y + this.height / 2, this.radiusOfFire, 0, 2 * Math.PI, false);
            root.context.fill();
            root.context.closePath();

            root.context.globalAlpha = 1.0;
        }
    }

    enemySpawned(enemy) {
        for(var e in this.targetEnemies) {
            if(this.targetEnemies[e].ID == enemy.id) {
                this.add(enemy);
                return;
            }
        }
    }

    enemyKilled(enemy) {
        this.remove(enemy);
    }

    showMenu() {
        this.drawRadius = true;
        this.menu.calculateNewPosition();
        this.root.add(this.menu);
    }

    hideMenu() {
        this.drawRadius = false;
        this.root.remove(this.menu);
    }

    keyPressed(keys) {
        if(keys[KEYBOARD_ESC]) {
            if(this.drawRadius) {
                this.hideMenu();
                this.getTotalRoot().mouse.selectedObject = undefined;
            }
        }
    }
}
Tower.isUnlocked = false;
Tower.SHOOT_SOUND_ID = 0;