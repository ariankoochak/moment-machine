const calcRuntimeSync = require("../../utils/calcRuntimeSync");
const findFastestRuntime = require("../../utils/findFastestRuntime");
const findSlowestRuntime = require("../../utils/findSlowestRuntime");

/**
 * This method executes an async function several times and calculates its execution time several times and places it in an array, and that array can be accessed in a callback function.
 * @param {Function} inputFunction The async function we want to calculate its execution times
 * @param {Function} cb A function that will be called as a callback and the output will be passed to this function
 * @param {{ ignoreFirstTime: boolean; runtimeCount: number; moreDetails : Boolean}} [options={ ignoreFirstTime: false, runtimeCount: 5 ;moreDetails : false}] ignoreFirstTime → In this method, you can set this key to true and the first execution is not considered. , runtimeCount → The number of times you want this function to be executed and its time taken, moreDetails → Gives more information than execution times
 * @callback function
 */
function getMultiRuntimeCb(
    inputFunction,
    cb,
    options = { ignoreFirstTime: false, runtimeCount: 5, moreDetails: false }
) {
    try {
        if (typeof cb !== "function") {
            cb = (err) => console.log(err);
            throw "callback function in getRuntimeCb not defined!";
        }
        const runTimes = [];
        const { ignoreFirstTime, runtimeCount, moreDetails } = options;

        let runCount = runtimeCount !== undefined ? runtimeCount : 5;
        if (ignoreFirstTime === true) {
            runCount++;
        }

        for (let i = 0; i < runCount; i++) {
            const runtime = calcRuntimeSync(inputFunction, 5);
            if (i === 0 && ignoreFirstTime === true) {
                continue;
            }
            runTimes.push(runtime);
        }

        Promise.all(runTimes).then((solvedRunTimes) => {
            if (moreDetails === true) {
                cb(null, {
                    runtimeCount:
                        ignoreFirstTime === true ? runCount - 1 : runCount,
                    fastestRuntimes: findFastestRuntime(solvedRunTimes),
                    slowestRuntimes: findSlowestRuntime(solvedRunTimes),
                    runtimes: [...solvedRunTimes],
                });
            } else {
                cb(null, {
                    runtimeCount:
                        ignoreFirstTime === true ? runCount - 1 : runCount,
                    runtimes: [...solvedRunTimes],
                });
            }
        });
    } catch (error) {
        cb(error, null);
    }
}

module.exports = getMultiRuntimeCb;
