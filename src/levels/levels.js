class Level1 extends Level {
    constructor(root) {
        super(root, 5, 100, 400, 0);

        var map = new Map1(this, root.canvas.width, root.canvas.height);
        this.setMap(map);

        var wave1 = new Wave(this, 2);
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        var wave2 = new Wave(this, 1);
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        var wave3 = new Wave(this, 0.8);
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        this.setWaves([wave1, wave2, wave3]);

        var redSoldierInfoMenu = new EnemyInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new RedSoldier(this, 64, 64, [0, 0]), "Red Soldier", undefined)
        var machineGunInfoMenu = new TowerInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new MachineGun(this, 0, 0, 64, 64), "Machine Gun", redSoldierInfoMenu);
        this.setFirstInfoMenu(machineGunInfoMenu);
    }
}

class Level2 extends Level {
    constructor(root) {
        super(root, 5, 100, 800, 1);

        var map = new Map2(this, root.canvas.width, root.canvas.height);
        this.setMap(map);

        var wave1 = new Wave(this, 2);
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        var wave2 = new Wave(this, 1);
        wave2.addEnemy(new SandTank(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        var wave3 = new Wave(this, 0.7);
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new SandTank(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new SandTank(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        this.setWaves([wave1, wave2, wave3]);

        var sandTankInfoMenu = new EnemyInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new SandTank(this, 64, 64, [0, 0]), "Sand Tank", undefined);
        var greenSoldierInfoMenu = new EnemyInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new GreenSoldier(this, 64, 64, [0, 0]), "Green Soldier", sandTankInfoMenu)
        var cannonInfoMenu = new TowerInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new GreenCannon(this, 0, 0, 64, 64), "Green Cannon", greenSoldierInfoMenu);
        this.setFirstInfoMenu(cannonInfoMenu);

        GreenCannon.isUnlocked = true;
    }
}

class Level3 extends Level {
    constructor(root) {
        super(root, 5, 100, 700, 2);

        var map = new Map3(this, root.canvas.width, root.canvas.height);
        this.setMap(map);

        var wave1 = new Wave(this, 2);
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new BrownSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave1.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        var wave2 = new Wave(this, 1);
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new BrownSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new SandTank(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new BrownSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave2.addEnemy(new SandTank(this, map.widthStep, map.heightStep, map.movePoints));

        var wave3 = new Wave(this, 0.7);
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new BrownSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new SandTank(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new SteelPlane(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new BrownSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new SandTank(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new BrownSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new GreenSoldier(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new SteelPlane(this, map.widthStep, map.heightStep, map.movePoints));
        wave3.addEnemy(new RedSoldier(this, map.widthStep, map.heightStep, map.movePoints));

        this.setWaves([wave1, wave2, wave3]);

        var steelPlaneInfoMenu = new EnemyInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new SteelPlane(this, 64, 64, [0, 0]), "Steel Plane", undefined);
        var brownSoldierInfoMenu = new EnemyInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new BrownSoldier(this, 64, 64, [0, 0]), "Brown Soldier", steelPlaneInfoMenu)
        var missileLauncherInfoMenu = new TowerInfoMenu(this, root.canvas.width / 4, root.canvas.height / 4, root.canvas.width / 2, root.canvas.height / 2, new MissileLauncher(this, 0, 0, 64, 64), "Missile Launcher", brownSoldierInfoMenu);
        this.setFirstInfoMenu(missileLauncherInfoMenu);

        MissileLauncher.isUnlocked = true;
    }
}