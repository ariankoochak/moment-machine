const calcRuntime = require("../../utils/calcRuntime");
const floatFixing = require("../../utils/floatFixing");
const getResultForMultiRuntime = require('../../utils/getResultForMultiRuntime')


/**
 * This method executes a function several times and calculates its execution time several times and puts it in an array.
 * @param {Function} inputFunction The function we want to calculate its execution times
 * @param {Boolean} options.ignoreFirstTime In this method, you can set this key to true and the first execution is not considered.
 * @param {Number} options.runtimeCount The number of times you want this function to be executed and its time taken
 * @param {‌Boolean} options.moreDetails Gives more information than execution times
 * @returns {Object}
 */
function getMultiRuntime(
    inputFunction,
    options = { ignoreFirstTime: false, runtimeCount: 5, moreDetails: false }
) {
    try {
        const runTimes = [];
        const { ignoreFirstTime, runtimeCount, moreDetails } = options;

        let runCount = runtimeCount !== undefined ? runtimeCount : 5;
        if (ignoreFirstTime === true) {
            runCount++;
        }

        for (let i = 0; i < runCount; i++) {
            const runtime = floatFixing(calcRuntime(inputFunction), 5);
            if (i === 0 && ignoreFirstTime === true) {
                continue;
            }
            runTimes.push(runtime);
        }

        return getResultForMultiRuntime(runTimes,runCount,moreDetails,ignoreFirstTime)
    } catch (error) {
        console.log(error);
    }
}

module.exports = getMultiRuntime;
