function Map1(root, canvasWidth, canvasHeight) {
    var grass = Assets.GAME_OBJECTS.getTile("grassTile");
    var dirt =  Assets.GAME_OBJECTS.getTile("dirtTile");
    var smallGrass = Assets.GAME_OBJECTS.getTile("smallGrass");

    var drawMap = [
       [[grass], [dirt], [grass], [grass, smallGrass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [dirt], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [dirt], [grass]],
       [[grass], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [grass]],
       [[grass], [dirt], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [dirt], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass, smallGrass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt], [dirt]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
    ];

    var playMap = [
        ["U", "P", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["U", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "U"],
        ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "P", "U"],
        ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "P", "U"],
        ["U", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "U"],
        ["U", "P", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["U", "P", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["U", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"],
        ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
    ];

    var movePoints = [
        [1, 0],
        [1, 1],
        [14, 1],
        [14, 4],
        [1, 4],
        [1, 7],
        [15, 7]
    ];

    return new Map(root, canvasWidth, canvasHeight, Assets.GAME_OBJECTS.image, movePoints, drawMap, playMap);
}

function Map2(root, canvasWidth, canvasHeight) {
    var grass = Assets.GAME_OBJECTS.getTile("grassTile");
    var path =  Assets.GAME_OBJECTS.getTile("dirtTile");
    var smallRock = Assets.GAME_OBJECTS.getTile("mediumRock");
    var bush = Assets.GAME_OBJECTS.getTile("bush2");

    var drawMap = [
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [path], [path], [path], [path], [path], [path], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [path], [grass], [grass], [grass, bush], [grass], [path], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [path], [grass], [grass], [grass], [grass], [path], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[path], [path], [path], [grass], [grass], [grass], [grass], [path], [grass], [grass], [grass], [grass], [path], [path], [path], [path]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [path], [grass], [grass, smallRock], [grass], [grass], [path], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [path], [grass], [grass], [grass], [grass], [path], [grass], [grass], [grass]],
       [[grass], [grass], [grass, smallRock], [grass], [grass], [grass], [grass], [path], [path], [path], [path], [path], [path], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
       [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
    ];

    var playMap = [
        ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["U", "U", "P", "P", "P", "P", "P", "P", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["U", "U", "P", "U", "U", "U", "U", "P", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["U", "U", "P", "U", "U", "U", "U", "P", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["P", "P", "P", "U", "U", "U", "U", "P", "U", "U", "U", "U", "P", "P", "P", "P"],
        ["U", "U", "U", "U", "U", "U", "U", "P", "U", "U", "U", "U", "P", "U", "U", "U"],
        ["U", "U", "U", "U", "U", "U", "U", "P", "U", "U", "U", "U", "P", "U", "U", "U"],
        ["U", "U", "U", "U", "U", "U", "U", "P", "P", "P", "P", "P", "P", "U", "U", "U"],
        ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
    ];

    var movePoints = [
        [0, 4],
        [2, 4],
        [2, 1],
        [7, 1],
        [7, 7],
        [12, 7],
        [12, 4],
        [15, 4]
    ];

    return new Map(root, canvasWidth, canvasHeight, Assets.GAME_OBJECTS.image, movePoints, drawMap, playMap);
}

function Map3(root, canvasWidth, canvasHeight) {
    var grass = Assets.GAME_OBJECTS.getTile("grassTile");
    var path =  Assets.GAME_OBJECTS.getTile("dirtTile");
    var smallGrass = Assets.GAME_OBJECTS.getTile("smallGrass");

    var drawMap = [
        [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
        [[path], [path], [grass], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path]],
        [[grass], [path], [grass], [path], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
        [[grass], [path], [grass], [path], [grass], [grass, smallGrass], [grass], [grass], [path], [path], [path], [path], [path], [path], [grass], [grass]],
        [[grass], [path], [grass], [path], [grass], [grass], [grass], [grass], [path], [grass], [grass], [grass], [grass], [path], [grass], [grass]],
        [[grass], [path], [grass], [path], [path], [path], [path], [path], [path], [grass], [grass], [grass, smallGrass], [grass], [path], [grass], [grass]],
        [[grass], [path], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [path], [grass], [grass]],
        [[grass], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path], [path], [grass], [grass]],
        [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
        [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
        [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
        [[grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass], [grass]],
    ];

    var playMap = [
        ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["P", "P", "U", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"],
        ["U", "P", "U", "P", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
        ["U", "P", "U", "P", "U", "U", "U", "U", "P", "P", "P", "P", "P", "P", "U", "U"],
        ["U", "P", "U", "P", "U", "U", "U", "U", "P", "U", "U", "U", "U", "P", "U", "U"],
        ["U", "P", "U", "P", "P", "P", "P", "P", "P", "U", "U", "U", "U", "P", "U", "U"],
        ["U", "P", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "P", "U", "U"],
        ["U", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "U", "U"],
        ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"],
    ];

    var movePoints = [
        [0, 1],
        [1, 1],
        [1, 7],
        [13, 7],
        [13, 3],
        [8, 3],
        [8, 5],
        [3, 5],
        [3, 1],
        [15, 1]
    ];

    return new Map(root, canvasWidth, canvasHeight, Assets.GAME_OBJECTS.image, movePoints, drawMap, playMap);
}