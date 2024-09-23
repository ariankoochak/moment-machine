module.exports = function (runtimes) {
    let slowestTime = -1;
    for (const runtime of runtimes) {
        if (slowestTime <= runtime) {
            slowestTime = runtime;
        }
    }
    return slowestTime;
};
