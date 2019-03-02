
exports.loopWPipe = function loopWPipe(names) {
    const result = [];
    for (const i of names) {
        if (i.name === "Abby")
            result.push(i.job);
    }

    return result
}