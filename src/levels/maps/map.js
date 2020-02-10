class Map extends GameObject {
    constructor(root, canvasWidth, canvasHeight, spritesheetImage, movePoints, drawMap, playMap) {
        super(root, 0, 0, 0, 0, spritesheetImage);

        this.movePoints = movePoints;
        this.drawMap = drawMap;
        this.playMap = playMap;

        this.width = drawMap[0].length;
        this.height = drawMap.length;
        this.widthStep = canvasWidth / this.width;
        this.heightStep = canvasHeight / this.height;

        this.translateMovePoints();
    }

    draw(root) {
        var currentX = 0, currentY = 0;

        for(var i = 0; i < this.drawMap.length; i ++) {
            for(var j = 0; j < this.drawMap[i].length; j ++) {
                for(var k = 0; k < this.drawMap[i][j].length; k ++) {
                    root.context.drawImage(this.image, this.drawMap[i][j][k].x, this.drawMap[i][j][k].y, this.drawMap[i][j][k].width, this.drawMap[i][j][k].height, currentX, currentY, this.widthStep, this.heightStep);
                }
                currentX += this.widthStep;
            }
            currentY += this.heightStep;
            currentX = 0;
        }
    }

	translateMovePoints()  {
        this.movePoints.forEach(element => {
            element[0] *= this.widthStep;
            element[1] *= this.heightStep;
        });
    }

    getGridCoordinates(object) {
        var gridX = Math.floor(object.x / this.widthStep);
        var gridY = Math.floor(object.y / this.heightStep);

        if(gridX < 0 || gridX > this.playMap[0].length - 1 || gridY < 0 || gridY > this.playMap.length - 1) return undefined;

        return {
            x: gridX,
            y: gridY
        };
    }

    mouseMove(scene, mouse) {
        if(mouse.selectedObject && !mouse.selectedObject.isBuild) {
            var grid = this.getGridCoordinates(mouse);

            if(grid == undefined) return;

            mouse.selectedObject.x = grid.x * this.widthStep;
            mouse.selectedObject.y = grid.y * this.heightStep

            if(this.playMap[grid.y][grid.x] != "U") mouse.selectedObject.radiusColor = "red";
            else mouse.selectedObject.radiusColor = "green";
        }
    }

	mouseClick(mouse) {
        if(this.canReactOnGamePause()) return;

        var grid = this.getGridCoordinates(mouse);

        if(mouse.selectedObject && !mouse.selectedObject.isBuild) {
            if(grid == undefined) return;

            if(this.playMap[grid.y][grid.x] != "U") return;

            this.playMap[grid.y][grid.x] = mouse.selectedObject;

            mouse.selectedObject.isBuild = true;

            this.root.onTowerBuild(mouse.selectedObject);

            if(!mouse.selectedObject.isChangingPosition) this.getTotalRoot().audioManager.playSound(Assets.COINS_SOUND);

            mouse.selectedObject.isChangingPosition = false;

            mouse.selectedObject = undefined;
        }
        else {
            if(grid == undefined) {
                if(mouse.selectedObject) {
                    mouse.selectedObject.hideMenu();
                    mouse.selectedObject = undefined;
                }
                return;
            }

            if(this.playMap[grid.y][grid.x] instanceof Tower) {
                if(!mouse.selectedObject) {
                    mouse.selectedObject = this.playMap[grid.y][grid.x];
                    mouse.selectedObject.showMenu();
                }
                else {
                    mouse.selectedObject.hideMenu();
                    mouse.selectedObject = undefined;
                }
            }
        }
    }

	onTowerDestroy(tower) {
        var grid = this.getGridCoordinates(tower);

        this.playMap[grid.y][grid.x] = "U";
    }
}