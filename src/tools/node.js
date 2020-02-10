class Node {
    constructor() {
        this.nodes = [];
        this.events = {};
    }
    
    add(node) {
        if(node == undefined) return;
        this.nodes.push(node);
    }

    remove(node) {
        if(node == undefined) return;
        var index = this.nodes.indexOf(node);

        if(index < 0) return;

        this.nodes.splice(index, 1);
    }

    notify(/*event , args ... */) {
        var event = arguments[0]
        var args = Array.prototype.slice.call(arguments, 1)

        for (var index in this.nodes) {
            var node = this.nodes[index]
            if (node && typeof(node[event]) == "function")
                node[event].apply(node, args)
        }
    }
}