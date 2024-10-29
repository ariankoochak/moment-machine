const calcRuntime = require("../../utils/calcRuntime");
const floatFixing = require("../../utils/floatFixing");
const {automateSort, getSmallest, getBiggest} = require('sortex')
const getMultiRuntime = require("../GetMultiRunTime/getMultiRuntime");

/**
 * With this method, you can compare the execution time of several functions and get complete information from it
 * @param {Function} inputFunctions The function we want to calculate its execution times
 * @param {Number} runtimeCount The number of times you want input functions to be executed and its time taken
 * @returns {Object}
 */
function compareFuncs(runtimeCount = 5, ...inputFunctions) {
    try {
        if (runtimeCount <= 0) {
            runtimeCount = 5;
        }
        const firstRuntimes = [];
        const multiRuntimes = []
        for (const func of inputFunctions) {
            firstRuntimes.push([func,floatFixing(calcRuntime(func), 5)]);
            multiRuntimes.push([func,getMultiRuntime(func,{ignoreFirstTime : true,runtimeCount : runtimeCount,moreDetails : true})]);
        }
        const sortedFirstRuntimes = automateSort(firstRuntimes,{valuePath : '1'});
        const multiFastestRun = getSmallest(multiRuntimes,{valuePath : "1.fastestRuntimes"});
        const multiSlowestRun = getBiggest(multiRuntimes,{valuePath : "1.slowestRuntimes"})
        const multiFastestAverage = getSmallest(multiRuntimes,{valuePath : "1.average"})
        const multiSlowestAverage = getBiggest(multiRuntimes,{valuePath : "1.average"})
        const rtnObj = {
            firstRuntimes: {
                fastest: getSmallest(firstRuntimes, { valuePath: "1" }),
                slowest: getBiggest(firstRuntimes, { valuePath: "1" }),
                rank: sortedFirstRuntimes,
            },
            multiRuntimes: {
                fastestRun : [multiFastestRun[0],multiFastestRun[1].fastestRuntimes],
                slowestRun : [multiSlowestRun[0],multiSlowestRun[1].slowestRuntimes],
                fastestAverage : [multiFastestAverage[0],multiFastestAverage[1].average],
                slowestAverage : [multiSlowestAverage[0],multiSlowestAverage[1].average],
                result : multiRuntimes
            },
        };
        return rtnObj
    } catch (error) {
        console.log(error);
    }
}

module.exports = compareFuncs;
