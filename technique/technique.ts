
class Greeter {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    public greet() {
        return "Hello, " + this.greeting;
    }
}

exports.squareOf = function squareOf(n) {
    return n * n;
}

exports.loopWPipe = function loopWPipe(names) {
    const result = [];
    for (const i of names) {
        if (i.name === "Abby")
            result.push(i.job);
    }

    return result;
}
