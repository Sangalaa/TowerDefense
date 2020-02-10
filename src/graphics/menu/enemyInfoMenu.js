class EnemyInfoMenu extends InfoMenu {
    constructor(root, x, y, width, height, enemy, headline, nextMenu) {
        super(root, x, y, width, height, enemy, headline, nextMenu);

        var enemyImage = new GameObject(this, this.x + 40 + this.frameBackground.width / 2 - enemy.width / 2, this.y + this.frameBackground.height / 2 + enemy.height, enemy.width, enemy.height, undefined);
        enemyImage.setTiledImage(enemy.image, enemy.tile);
        enemyImage.imageRotation = enemy.imageRotation;

        this.add(enemyImage);
    }

    createInfo(enemy) {
        return {
            Health: "Health: " + enemy.health,
            Damage: "Damage: " + enemy.damage,
            MoveSpeed: "Move speed: " + enemy.moveSpeed,
            MoneyPerKill: "Money per kill: " + enemy.moneyPerKill
        }
    }
}