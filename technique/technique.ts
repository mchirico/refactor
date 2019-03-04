
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}



exports.squareOf = function squareOf(n) {
    return n * n
}

exports.loopWPipe = function loopWPipe(names) {
    const result = [];
    for (const i of names) {
        if (i.name === "Abby")
            result.push(i.job);
    }

    return result
}