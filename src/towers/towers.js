class MachineGun extends Tower {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("greenTurrent"), -90, 100, Assets.GAME_OBJECTS.getTile("base2"), 1, 100, 50, 75, "Machine Gun", [RedSoldier, GreenSoldier, BrownSoldier]);

        this.addSound(Tower.SHOOT_SOUND_ID, Assets.MACHINE_GUN_SOUND);
    }

    spawnProjectile(target) {
        return new MachineGunProjectile(this.root, this.x, this.y, this.width, this.height, target);
    }
}
MachineGun.isUnlocked = true;

class GreenCannon extends Tower {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("greenCannon"), 0, 120, Assets.GAME_OBJECTS.getTile("base2"), 1.5, 200, 100, 150, "Green Cannon", [SandTank]);

        this.addSound(Tower.SHOOT_SOUND_ID, Assets.CANON_SOUND);
    }

    spawnProjectile(target) {
        return new SteelProjectile(this.root, this.x, this.y, this.width, this.height, target);
    }
}
GreenCannon.isUnlocked = false;

class MissileLauncher extends Tower {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.GAME_OBJECTS.image, Assets.GAME_OBJECTS.getTile("launcher1"), 0, 100, Assets.GAME_OBJECTS.getTile("base2"), 1, 300, 150, 200, "Missile Laucher", [SteelPlane]);

        this.addSound(Tower.SHOOT_SOUND_ID, Assets.ROCKET_SOUND);
    }

    spawnProjectile(target) {
        return new SmallRocket(this.root, this.x, this.y, this.width, this.height, target);
    }
}
MissileLauncher.isUnlocked = false;