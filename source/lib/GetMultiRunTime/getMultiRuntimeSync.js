const calcRuntimeSync = require("../../utils/calcRuntimeSync");
const findFastestRuntime = require("../../utils/findFastestRuntime");
const findSlowestRuntime = require("../../utils/findSlowestRuntime");

/**
 * This method executes a async function several times and calculates its execution time several times and puts it in an array.
 * @param {Function} inputFunction The async function we want to calculate its execution times
 * @param {{ ignoreFirstTime: boolean; runtimeCount: number; moreDetails : Boolean}} [options={ ignoreFirstTime: false, runtimeCount: 5 ;moreDetails : false}] ignoreFirstTime → In this method, you can set this key to true and the first execution is not considered. , runtimeCount → The number of times you want this function to be executed and its time taken, moreDetails → Gives more information than execution times
 * @returns {Promise} Promise → Returns the promise that contains the runtimes
 */
async function getMultiRuntimeSync(
    inputFunction,
    options = { ignoreFirstTime: false, runtimeCount: 5, moreDetails: false }
) {
    try {
        const runTimes = [];
        const { ignoreFirstTime, runtimeCount } = options;

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

        return new Promise((resolve, reject) => {
            Promise.all(runTimes).then((solvedRunTimes) => {
                if (options.moreDetails === true) {
                    resolve({
                        runtimeCount:
                            ignoreFirstTime === true ? runCount - 1 : runCount,
                        fastestRuntimes: findFastestRuntime(solvedRunTimes),
                        slowestRuntimes: findSlowestRuntime(solvedRunTimes),
                        runtimes: [...solvedRunTimes],
                    });
                } else {
                    resolve({
                        runtimeCount:
                            ignoreFirstTime === true ? runCount - 1 : runCount,
                        runtimes: [...solvedRunTimes],
                    });
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = getMultiRuntimeSync;
