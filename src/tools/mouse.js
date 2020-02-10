class Mouse extends GameObject {
    constructor(root) {
        super(root, 0, 0, 1, 1, undefined);

        this.lastHoveredObject = false;
        this.hoveredObject = false;
        this.registeredInThisFrame = false;
        this.selectedObject = false;
    }

    update() {
        if(this.hoveredObject instanceof Button) {
            if(this.lastHoveredObject !== this.hoveredObject) this.root.audioManager.playSound(Assets.BUTTON_HOVER_SOUND);
            this.lastHoveredObject = this.hoveredObject;
        }
    }
}