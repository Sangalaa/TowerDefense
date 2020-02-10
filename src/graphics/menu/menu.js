class Menu extends GameObject {
    constructor(root, x, y, width, height, background) {
        super(root, x, y, width, height);

        this.image = background;
        this.scene = [];

        this.addToScene(this.getTotalRoot().mouse);
    }

    addMenuElement(object) {
        if(object == undefined) return;

        this.addToScene(object);
        this.add(object);
    }

    addToScene(object) {
        if(object == undefined) return;

        this.scene.push(object);
    }

    mouseMove(scene, mouse) {
        this.notify("mouseMove", this.scene, mouse);
    }

    draw(root) {
        super.draw(root);
        this.notify("draw", root);
    }

    onTowerBuild(tower) {
        this.notify("onTowerBuild", tower);
    }

    update() {
        this.notify("update");
    }

    onMouseAdd(mouse) {
        this.addToScene(mouse);

        super.onMouseAdd(mouse);
    }

    onMouseRemove() {
        for(var index in this.scene) {
            if(this.scene[index] instanceof Mouse) {
                this.scene.splice(index, 1);
                break;
            }
        }

        super.onMouseRemove();
    }

    cleanUp() {}
}