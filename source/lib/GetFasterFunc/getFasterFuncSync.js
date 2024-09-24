const calcRuntimeSync = require("../../utils/calcRuntimeSync");

/**
 * Pass as many async functions as you want to this method and get the fastest async function based on execution time
 * @param  {...Function} inputFunctions
 * @returns {Promise} faster function
 */
async function getFasterFuncSync(...inputFunctions) {
    try {
        const runTimes = [];
        let fasterRuntimeIndex = -1;
        let fasterRuntime = Infinity;
        for (const func of inputFunctions) {
            const runtime = calcRuntimeSync(func);
            runTimes.push(runtime);
        }
        return new Promise((resolve, reject) => {
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
                    resolve(inputFunctions[fasterRuntimeIndex]);
                });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = getFasterFuncSync;
