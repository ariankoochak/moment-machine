const calcRuntimeSync = require("../../utils/calcRuntimeSync");

/**
 * Pass as many async functions as you want to this method and get the fastest async function based on execution time
 * @param  {Array} inputFunctionsArr Array of Functions
 * @callback Function err | fasterFunction
 */
function getFasterFuncCb(inputFunctionsArr, cb) {
    try {
        if (typeof cb !== "function") {
            cb = (err) => console.log(err);
            throw "callback function in getRuntimeCb not defined!";
        }
        const runTimes = [];
        let fasterRuntimeIndex = -1;
        let fasterRuntime = Infinity;
        for (const func of inputFunctionsArr) {
            const runtime = calcRuntimeSync(func);
            runTimes.push(runtime);
        }
        Promise.all(runTimes)
            .then((solvedRunTimes) => {
                for (let i = 0; i < solvedRunTimes.length; i++) {
                    if (fasterRuntime > solvedRunTimes[i]) {
                        fasterRuntime = solvedRunTimes[i];
                        fasterRuntimeIndex = i;
                    }
                }
            })
            .then(() => {
                cb(null, inputFunctionsArr[fasterRuntimeIndex]);
            });
    } catch (error) {
        cb(error, null);
    }
}

module.exports = getFasterFuncCb;