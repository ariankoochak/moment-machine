const floatFixing = require("./utils/floatFixing");
const calcRuntime = require("./utils/calcRuntime");
const testFunc = require('./tests/testFunctions');


/**
 * With this method, you can get the execution time of the function (in milliseconds). Usually, the first execution of the function takes more time than subsequent executions
 * @param {Function} inputFunction 
 * @returns {number} runtime => milliseconds
 */
function getRuntime(inputFunction){
    return floatFixing(calcRuntime(inputFunction),3);
}

/**
 * 
 * @param  {...any} inputFunctions 
 * @returns {Function} faster function
 */
function getFasterFunc(...inputFunctions){
    let fasterFunction;
    let fasterRuntime = Infinity;
    for(const func of inputFunctions){
        const runtime = calcRuntime(func);
        if(runtime < fasterRuntime){
            fasterFunction = func;
            fasterRuntime = runtime
        }
    }
    return fasterFunction
    
}

module.exports = {
    getRuntime,
    getFasterFunc,
}