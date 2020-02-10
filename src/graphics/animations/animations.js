class BigBlackSmokeAnimation extends GameAnimation {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.SMOKE_1, 4, 4, Assets.SMOKE_1.width / 4, Assets.SMOKE_1.height / 4, 10);
    }
}

class SmallBlackSmokeAnimation extends GameAnimation {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.SMOKE_2, 8, 5, Assets.SMOKE_2.width / 8, Assets.SMOKE_2.height / 8, 5);
    }
}

class WhiteSmokeAnimation extends GameAnimation {
    constructor(root, x, y, width, height) {
        super(root, x, y, width, height, Assets.SMOKE_3, 4, 4, Assets.SMOKE_3.width / 4, Assets.SMOKE_3.height / 4, 10);
    }
}