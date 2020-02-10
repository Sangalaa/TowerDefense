class TowerInfoMenu extends InfoMenu {
    constructor(root, x, y, width, height, tower, headline, nextMenu) {
        super(root, x, y, width, height, tower, headline, nextMenu);
    
        var towerBaseImage = new GameObject(this, this.x + 40 + this.frameBackground.width / 2 - tower.width / 2, this.y + this.frameBackground.height / 2 + tower.height, tower.width, tower.height, undefined);
        towerBaseImage.setTiledImage(tower.image, tower.baseTile);
        
        var towerImage = new GameObject(this, towerBaseImage.x, towerBaseImage.y, towerBaseImage.width, towerBaseImage.height, undefined);
        towerImage.setTiledImage(tower.image, tower.tile);
        towerImage.imageRotation = tower.imageRotation;
        
        var priceLabel = new LabeledIcon(this, this.frameBackground.x + 20, this.frameBackground.y + this.frameBackground.height / 1.4, 20, 20, Assets.COIN_IMAGE, "" + tower.buyPrice, "white", "15pt");
    
        this.add(towerBaseImage);
        this.add(towerImage);
        this.add(priceLabel);
    }

    createInfo(tower) {
        var targetEnemies = "";

        var projectile = tower.spawnProjectile(undefined);

        for(var i in tower.targetEnemies) {
            targetEnemies += tower.targetEnemies[i].name + "\n";
        }

        return {
            RadiusOfFire: "Radius of fire: " +  tower.radiusOfFire,
            Damage: "Damage: " + projectile.damage,
            ShootingSpeed: "Shooting speed: " + tower.shootingSpeed,
            BuyPrice: "Buy price: " + tower.buyPrice,
            MovePrice: "Move price: " + tower.movePrice,
            DestroyPrice: "Destroy price: " + tower.destroyPrice,
            TargetEnemies: "Target enemies: " + targetEnemies
        };
    }
}