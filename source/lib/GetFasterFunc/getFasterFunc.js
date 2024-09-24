const calcRuntime = require("../../utils/calcRuntime");

/**
 * Pass as many functions as you want to this method and get the fastest function based on execution time
 * @param  {...Function} inputFunctions
 * @returns {Function} faster function
 */
function getFasterFunc(...inputFunctions) {
    try {
        let fasterFunction;
        let fasterRuntime = Infinity;
        for (const func of inputFunctions) {
            const runtime = calcRuntime(func);
            if (runtime < fasterRuntime) {
                fasterFunction = func;
                fasterRuntime = runtime;
            }
        }
        return fasterFunction;
    } catch (error) {
        console.log(error);
    }
}

module.exports = getFasterFunc;
