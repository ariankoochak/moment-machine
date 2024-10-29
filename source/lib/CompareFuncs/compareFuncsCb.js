const calcRuntimeSync = require("../../utils/calcRuntimeSync");
const floatFixing = require("../../utils/floatFixing");
const { automateSort, getSmallest, getBiggest } = require("sortex");
const getMultiRuntimeSync = require("../GetMultiRunTime/getMultiRuntimeSync");

/**
 * With this method, you can compare the execution time of several functions and get complete information from it
 * @param {Function} cb A function that will be called as a callback and the output will be passed to this function
 * @param {Number} runtimeCount The number of times you want input functions to be executed and its time taken
 * @param {Function} inputFunctions The function we want to calculate its execution times
 * @returns {Object}
 */
async function compareFuncsCb(cb,runtimeCount = 5, ...inputFunctions) {
    try {
        if (runtimeCount <= 0) {
            runtimeCount = 5;
        }
        if (typeof cb !== "function") {
            cb = (err) => console.log(err);
            throw "callback function in getRuntimeCb not defined!";
        }
        const firstRuntimes = [];
        const multiRuntimes = [];
        for (const func of inputFunctions) {
            const runtime = await calcRuntimeSync(func);
            const multiRuntime = await getMultiRuntimeSync(func, {ignoreFirstTime: true,runtimeCount: runtimeCount,moreDetails: true,});
            firstRuntimes.push([func, floatFixing(runtime, 5)]);
            multiRuntimes.push([func,multiRuntime,]);
        }
        const sortedFirstRuntimes = automateSort(firstRuntimes, {
            valuePath: "1",
        });
        const multiFastestRun = getSmallest(multiRuntimes, {
            valuePath: "1.fastestRuntimes",
        });
        const multiSlowestRun = getBiggest(multiRuntimes, {
            valuePath: "1.slowestRuntimes",
        });
        const multiFastestAverage = getSmallest(multiRuntimes, {
            valuePath: "1.average",
        });
        const multiSlowestAverage = getBiggest(multiRuntimes, {
            valuePath: "1.average",
        });
        const rtnObj = {
            firstRuntimes: {
                fastest: getSmallest(firstRuntimes, { valuePath: "1" }),
                slowest: getBiggest(firstRuntimes, { valuePath: "1" }),
                rank: sortedFirstRuntimes,
            },
            multiRuntimes: {
                fastestRun: [
                    multiFastestRun[0],
                    multiFastestRun[1].fastestRuntimes,
                ],
                slowestRun: [
                    multiSlowestRun[0],
                    multiSlowestRun[1].slowestRuntimes,
                ],
                fastestAverage: [
                    multiFastestAverage[0],
                    multiFastestAverage[1].average,
                ],
                slowestAverage: [
                    multiSlowestAverage[0],
                    multiSlowestAverage[1].average,
                ],
                result: multiRuntimes,
            },
        };
        cb(null,rtnObj)
    } catch (err) {
        cb(err,null)
    }
}

module.exports = compareFuncsCb;
