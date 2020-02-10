class MachineGunProjectile extends Projectile {
    constructor(root, x, y, width, height, target) {
        super(root, x, y, width, height, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("yellowShot"), undefined, target, 15, 1, [RedSoldier.ID, GreenSoldier.ID, BrownSoldier.ID]);
    }
}
class SteelProjectile extends Projectile {
    constructor(root, x, y, width, height, target) {
        super(root, x, y, width, height, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("steelShot"), undefined, target, 10, 2, [SandTank.ID]);
    }
}

class SmallRocket extends Projectile {
    constructor(root, x, y, width, height, target) {
        super(root, x, y, width, height, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("smallRocket"), undefined, target, 3, 2, [SteelPlane.ID]);
    
        this.jetAnimation = new BigBlackSmokeAnimation(this, this.x, this.y, this.width / 2, this.height / 2);
        this.add(this.jetAnimation);

        this.addEventListener(MOVE_EVENT, function() {
            var totalRotationInRadians = this.currentImageRotation + this.imageRotation;
            var totalRotationInDegrees = totalRotationInRadians * TO_DEGREES;

            // mapped from atan2 to 0 - 360
            var mappedTotalRotation = (totalRotationInDegrees + 360) % 360;

            var positionOnCircle = calculatePositionOnCircle((mappedTotalRotation + 90) * TO_RADIANS, this.width * 0.80, this.height * 0.80);

            this.jetAnimation.x = this.x + this.width / 4 + positionOnCircle.x;
            this.jetAnimation.y = this.y + this.height / 4 + positionOnCircle.y;
        }.bind(this));
    }

    draw(root) {
        super.draw(root);
        this.notify("draw", root);
    }
    
    update() {
        super.update();
        this.calculateDirection();
        if(this.target) this.currentImageRotation = calculateRotationBetweenTwoPoints(this.x, this.y, this.target.x, this.target.y);
        
        this.notify("update");
    }
}