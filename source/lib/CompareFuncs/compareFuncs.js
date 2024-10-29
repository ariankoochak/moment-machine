const calcRuntime = require("../../utils/calcRuntime");
const floatFixing = require("../../utils/floatFixing");
const {automateSort} = require('sortex')
const getResultForMultiRuntime = require("../../utils/getResultForMultiRuntime");
const { inpFunc1, inpFunc2, inpFunc3 } = require("../../tests/testFunctions");
const getMultiRuntime = require("../GetMultiRunTime/getMultiRuntime");

/**
 * This method executes a function several times and calculates its execution time several times and puts it in an array.
 * @param {Function} inputFunctions The function we want to calculate its execution times
 * @param {Number} runtimeCount The number of times you want this function to be executed and its time taken
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
        const rtnObj = {
            firstRuntimes : {},
            multiRuntimes : {},
        }
    } catch (error) {
        console.log(error);
    }
}

compareFuncs(6,inpFunc1,inpFunc2,inpFunc3)

module.exports = compareFuncs;
