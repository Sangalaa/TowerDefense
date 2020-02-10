class RedSoldier extends Enemy {
    constructor(root, width, height, movePoints) {
        super(root, movePoints[0][0], movePoints[0][1], width, height, RedSoldier.ID, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("redSoldier"), 5, 10, 2, 20, movePoints);

        this.addSound(Enemy.WALKING_SOUND_ID, Assets.SOLDIERS_WALKING_SOUND);
        this.addSound(Enemy.HIT_SOUND_ID, Assets.SOLDIER_DAMAGE_SOUND);

        this.setImageRotation(-90);
    }
}
RedSoldier.ID = 0;

class GreenSoldier extends Enemy {
    constructor(root, width, height, movePoints) {
        super(root, movePoints[0][0], movePoints[0][1], width, height, GreenSoldier.ID, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("greenSoldier"), 5, 10, 2.5, 30, movePoints);

        this.addSound(Enemy.WALKING_SOUND_ID, Assets.SOLDIERS_WALKING_SOUND);
        this.addSound(Enemy.HIT_SOUND_ID, Assets.SOLDIER_DAMAGE_SOUND);

        this.setImageRotation(-90);
    }
}
GreenSoldier.ID = 1;

class BrownSoldier extends Enemy {
    constructor(root, width, height, movePoints) {
        super(root, movePoints[0][0], movePoints[0][1], width, height, BrownSoldier.ID, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("brownSoldier"), 10, 10, 2, 40, movePoints);

        this.addSound(Enemy.WALKING_SOUND_ID, Assets.SOLDIERS_WALKING_SOUND);
        this.addSound(Enemy.HIT_SOUND_ID, Assets.SOLDIER_DAMAGE_SOUND);

        this.setImageRotation(-90);
    }
}
BrownSoldier.ID = 2;

class SandTank extends Enemy {
    constructor(root, width, height, movePoints) {
        super(root, movePoints[0][0], movePoints[0][1], width, height, SandTank.ID, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("sandTank"), 10, 15, 1, 50, movePoints);

        this.tankTurrent = new Enemy(this, this.x, this.y, this.width, this.height, undefined, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("sandTurrent"), 0, 0, this.moveSpeed, 0, movePoints);
        this.tankTurrent.setImageRotation(-90);
        this.add(this.tankTurrent);

        this.engineSmokeAnimation = new SmallBlackSmokeAnimation(this, this.x, this.y, width, height);
        this.add(this.engineSmokeAnimation);

        this.addEventListener(MOVE_EVENT, function() {
            var totalRotationInRadians = this.currentImageRotation + this.imageRotation;
            var totalRotationInDegrees = totalRotationInRadians * TO_DEGREES;

            // mapped from atan2 to 0 - 360
            var mappedTotalRotation = (totalRotationInDegrees + 360) % 360;
            var mappedOppositeAngle = 180 + mappedTotalRotation;

            var positionOnCircle = calculatePositionOnCircle(mappedOppositeAngle * TO_RADIANS, this.width - this.width / 3, this.height - this.height / 3);

            this.engineSmokeAnimation.x = this.x + positionOnCircle.x;
            this.engineSmokeAnimation.y = this.y + positionOnCircle.y;
        }.bind(this));

        this.addSound(Enemy.WALKING_SOUND_ID, Assets.TANK_RUNNING_SOUND);
        this.addSound(Enemy.HIT_SOUND_ID, Assets.TANK_IMPACT_SOUND);
        this.addSound(Enemy.DEAD_SOUND_ID, Assets.TANK_EXPLOSION_SOUND);

        this.setImageRotation(-90);
    }

    update() {
        super.update();
        this.notify("update");
    }

    draw(root) {
        super.draw(root);
        this.notify("draw", root);
    }

    enemyPassed(enemy) {}
}
SandTank.ID = 3;

class SteelPlane extends Enemy {
    constructor(root, width, height, movePoints) {
        super(root, movePoints[0][0], movePoints[0][1], width, height, SteelPlane.ID, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("steelPlane"), 10, 10, 2, 20, movePoints);

        this.shadow = new Enemy(this, this.x - 0.5, this.y - 0.5, this.width + 4, this.height + 4, undefined, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("steelPlaneShadow"), 0, 0, this.moveSpeed, 0, movePoints);
        this.shadow.setImageRotation(-90);
        this.add(this.shadow);

        this.addSound(Enemy.WALKING_SOUND_ID, Assets.PLANE_FLYING_SOUND);
        this.addSound(Enemy.HIT_SOUND_ID, Assets.PLANE_IMPACT_SOUND);
        this.addSound(Enemy.DEAD_SOUND_ID, Assets.PLANE_EXPLOSION_SOUND);

        this.setImageRotation(-90);
    }

    update() {
        super.update();
        this.notify("update");
    }

    draw(root) {
        this.notify("draw", root);
        super.draw(root);
    }

    enemyPassed(enemy) {}
}
SteelPlane.ID = 4;