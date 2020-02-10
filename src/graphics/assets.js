class Assets {
    constructor() {}
}

Assets.BUTTONS = new Spritesheet("assets/graphics/tilesheets/Buttons/tilesheet.png");
Assets.BUTTONS.add(new Tile("start", 0, 0, 625, 270));
Assets.BUTTONS.add(new Tile("startHover", 633, 0, 625, 270));
Assets.BUTTONS.add(new Tile("restart", 0, 278, 625, 270));
Assets.BUTTONS.add(new Tile("restartHover", 633, 278, 625, 270));
Assets.BUTTONS.add(new Tile("ok", 0, 557, 625, 270));
Assets.BUTTONS.add(new Tile("okHover", 633, 557, 625, 270));
Assets.BUTTONS.add(new Tile("controls", 0, 836, 625, 270));
Assets.BUTTONS.add(new Tile("controlsHover", 633, 836, 625, 270));
Assets.BUTTONS.add(new Tile("exit", 0, 1115, 625, 270));
Assets.BUTTONS.add(new Tile("exitHover", 633, 1115, 625, 270));

Assets.ACTION_BUTTONS = new Spritesheet("assets/graphics/tilesheets/ActionButtons/tilesheet.png");
Assets.ACTION_BUTTONS.add(new Tile("info", 0, 0, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("infoHover", 344, 0, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("trash", 688, 0, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("trashHover", 1032, 0, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("pause", 1376, 0, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("pauseHover", 0, 368, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("back", 344, 368, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("backHover", 688, 368, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("cross", 1032, 368, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("crossHover", 1376, 368, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("play", 0, 736, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("playHover", 344, 736, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("settings", 688, 736, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("settingsHover", 1032, 736, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("speed", 1376, 736, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("speedHover", 0, 1104, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("levelWin", 344, 1104, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("gameWin", 688, 1104, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("move", 1032, 1104, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("moveHover", 1376, 1104, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("audioOn", 0, 1472, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("audioOnHover", 344, 1472, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("audioOff", 688, 1472, 344, 368));
Assets.ACTION_BUTTONS.add(new Tile("audioOffHover", 1032, 1472, 344, 368));

Assets.START_MENU_BACKGROUND = new Image();
Assets.START_MENU_BACKGROUND.src = "assets/graphics/backgrounds/mainMenu.png";

Assets.WINDOW = new Image();
Assets.WINDOW.src = "assets/graphics/backgrounds/window.png";

Assets.CONTROLS_MENU_BACKGROUND = new Image();
Assets.CONTROLS_MENU_BACKGROUND.src = "assets/graphics/backgrounds/controls.png";

Assets.GAME_PANEL_BACKGROUND = new Image();
Assets.GAME_PANEL_BACKGROUND.src = "assets/graphics/backgrounds/gamePanel.png";

Assets.COIN_IMAGE = new Image();
Assets.COIN_IMAGE.src = "assets/graphics/icons/coin.png";

Assets.HEALTH_IMAGE = new Image();
Assets.HEALTH_IMAGE.src = "assets/graphics/icons/health.png";

Assets.LEVEL_IMAGE = new Image();
Assets.LEVEL_IMAGE.src = "assets/graphics/icons/level.png";

Assets.LEVEL_HOVER_IMAGE = new Image();
Assets.LEVEL_HOVER_IMAGE.src = "assets/graphics/icons/levelHover.png";

Assets.LEVEL_LOCKED_IMAGE = new Image();
Assets.LEVEL_LOCKED_IMAGE.src = "assets/graphics/icons/levelLocked.png";

Assets.LOCK_IMAGE = new Image();
Assets.LOCK_IMAGE.src = "assets/graphics/icons/lock.png";

Assets.SKULL_IMAGE = new Image();
Assets.SKULL_IMAGE.src = "assets/graphics/icons/skull.png";

Assets.TIMER_IMAGE = new Image();
Assets.TIMER_IMAGE.src = "assets/graphics/icons/timer.png";

Assets.EXPLOSION = new Image();
Assets.EXPLOSION.src = "assets/graphics/tilesheets/Effects/explosion.png";

Assets.SMOKE_1 = new Image();
Assets.SMOKE_1.src = "assets/graphics/tilesheets/Effects/smoke1.png";

Assets.SMOKE_2 = new Image();
Assets.SMOKE_2.src = "assets/graphics/tilesheets/Effects/smoke2.png";

Assets.SMOKE_3 = new Image();
Assets.SMOKE_3.src = "assets/graphics/tilesheets/Effects/smoke3.png";

Assets.GAME_OBJECTS = new Spritesheet("assets/graphics/tilesheets/GameObjects/tilesheet.png");
Assets.GAME_OBJECTS.add(new Tile("bush1", 896, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("bush2", 960, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("smallBush", 1024, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("smallGrass", 1088, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("roundBush", 1152, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("grass", 1216, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("smallRock", 1280, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("bigRock", 1344, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("mediumRock", 1408, 320, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("grassTile", 1216, 384, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("dirtTile", 1280, 384, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("rockTile", 1344, 384, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("sandTile", 1408, 384, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("base1", 1216, 448, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("base2", 1280, 448, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("base3", 1344, 448, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("base4", 1408, 448, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("gun", 1216, 512, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("launcher1", 1280, 512, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("launcher2", 1344, 512, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("launcher3", 1408, 512, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("greenSoldier", 960, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("redSoldier", 1024, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("brownSoldier", 1088, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("steelSoldier", 1152, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("greenCannon", 1216, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("redCannon", 1280, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("smallRocket", 1344, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("bigRocket", 1408, 640, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("greenTank", 960, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("sandTank", 1024, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("greenPlane", 1088, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("steelPlane", 1152, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("yellowShot", 1216, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("steelShot", 1280, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("brownShot", 1344, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("whiteShot", 1408, 704, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("greenTurrent", 960, 768, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("sandTurrent", 1024, 768, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("greenPlaneShadow", 1088, 768, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("steelPlaneShadow", 1152, 768, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("fire1", 1216, 768, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("fire2", 1280, 768, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("fire3", 1344, 768, 64, 64));
Assets.GAME_OBJECTS.add(new Tile("fire4", 1408, 768, 64, 64));

Assets.BACKGROUND_SOUND_1 = new Audio("assets/sounds/bg/AtLaunch.mp3");
Assets.BACKGROUND_SOUND_1.volume = 0.1;
Assets.BACKGROUND_SOUND_2 = new Audio("assets/sounds/bg/BlackVortex.mp3");
Assets.BACKGROUND_SOUND_2.volume = 0.1;
Assets.CANON_SOUND = new Audio("assets/sounds/canon/canon.mp3");
Assets.BUTTON_CLICK_SOUND = new Audio("assets/sounds/events/buttonClick.mp3");
Assets.BUTTON_HOVER_SOUND = new Audio("assets/sounds/events/buttonHover.mp3");
Assets.COINS_SOUND = new Audio("assets/sounds/events/coins.mp3");
Assets.LOSE_SOUND = new Audio("assets/sounds/events/lose.mp3");
Assets.TIMER_SOUND = new Audio("assets/sounds/events/timer.mp3");
Assets.WAVE_SOUND = new Audio("assets/sounds/events/wave.mp3");
Assets.WIN_SOUND = new Audio("assets/sounds/events/win.mp3");
Assets.MACHINE_GUN_SOUND = new Audio("assets/sounds/machineGun/machineGun.mp3");
Assets.PLANE_EXPLOSION_SOUND = new Audio("assets/sounds/plane/planeExplosion.mp3");
Assets.PLANE_FLYING_SOUND = new Audio("assets/sounds/plane/planeFlying.mp3");
Assets.PLANE_IMPACT_SOUND = new Audio("assets/sounds/plane/planeImpact.mp3");
Assets.ROCKET_SOUND = new Audio("assets/sounds/rocket/rocket.mp3");
Assets.SOLDIER_DAMAGE_SOUND = new Audio("assets/sounds/soldiers/soldierDamage.mp3");
Assets.SOLDIERS_WALKING_SOUND = new Audio("assets/sounds/soldiers/soldiers.mp3");
Assets.TANK_EXPLOSION_SOUND = new Audio("assets/sounds/tank/tankExplosion.mp3");
Assets.TANK_IMPACT_SOUND = new Audio("assets/sounds/tank/tankImpact.mp3");
Assets.TANK_RUNNING_SOUND = new Audio("assets/sounds/tank/tankRunning.mp3");
Assets.TOWER_BUILDING_SOUND = new Audio("assets/sounds/tower/towerBuilding.mp3");
Assets.TOWER_DESTROY_SOUND = new Audio("assets/sounds/tower/towerDestroy.mp3");