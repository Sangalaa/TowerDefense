const TO_RADIANS = Math.PI / 180;
const TO_DEGREES = 180 / Math.PI;

function calculateRotationBetweenTwoPoints(x1, y1, x2, y2) {
    return Math.atan2(x2 - x1, - (y2 - y1));
}

function calculateDistance(x1, y1, x2, y2) {
    var pathX = x1 - x2;
    var pathY = y1 - y2;
    return Math.sqrt(pathX * pathX + pathY * pathY);
}

function calculatePositionOnCircle(radiusInRadians, width, height) {
    return {
        x: (width / 2) * Math.cos(radiusInRadians),
        y: (height / 2) * Math.sin(radiusInRadians)
    }
}