const findFastestRuntime = require('./findFastestRuntime');
const findSlowestRuntime = require("./findSlowestRuntime");
const calcAverage = require('./calcAverage');
const floatFixing = require('./floatFixing');

/**
 * 
 * @param {Array} arr 
 * @param {Number} runCount 
 * @param {Boolean} moreDetails 
 * @param {Boolean} ignoreFirstTime 
 * @returns {Object}
 */
function getResultForMultiRuntime(arr,runCount = 5,moreDetails = false,ignoreFirstTime = false) {
    if (moreDetails === true) {
        return {
            runtimeCount: ignoreFirstTime === true ? runCount - 1 : runCount,
            fastestRuntimes: findFastestRuntime(arr),
            slowestRuntimes: findSlowestRuntime(arr),
            average : floatFixing(calcAverage(arr),5),
            runtimes: [...arr],
        };
    } 
    else {
        return {
            runtimeCount: ignoreFirstTime === true ? runCount - 1 : runCount,
            runtimes: [...arr],
        };
    }
}

module.exports = getResultForMultiRuntime;
