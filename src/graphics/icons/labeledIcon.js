class LabeledIcon extends GameObject {
    constructor(root, x, y, width, height, image, text, textColor, fontSize) {
        super(root, x, y, width, height, image);

        this.text = text;
        this.textColor = textColor;
        this.fontSize = fontSize;
        this.textHeight = parseInt(this.getTotalRoot().context.font);
    }

    draw(root) {
        super.draw(root);
        root.context.fillStyle = this.textColor;
        root.context.font = this.fontSize + " " + Game.BASIC_FONT;
        root.context.fillText(this.text, this.x + this.width + this.width / 2, this.y + this.textHeight / 2 + this.height / 2, root.context.measureText(this.text).width);
    }
    
    update(newText) {
        if(newText == undefined) return;

        this.text = newText;
    }
}