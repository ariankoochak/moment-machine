const floatFixing = require("./utils/floatFixing");
const calcRuntime = require("./utils/calcRuntime");
const calcRuntimeSync = require("./utils/calcRuntimeSync");

const testFuncs = require('./tests/testFunctions')

/**
 * With this method, you can get the execution time of the function (in milliseconds). Usually, the first execution of the function takes more time than subsequent executions
 * @param {Function} inputFunction
 * @returns {number} runtime => milliseconds
 */
function getRuntime(inputFunction) {
    return floatFixing(calcRuntime(inputFunction), 3);
}

/**
 * This method calculates the execution time of the async function and provides it to you in the form of a promise
 * @param {Function} inputFunction
 * @return {Promise} runtime => milliseconds
 */
async function getRuntimeSync(inputFunction) {
    const runtime = await calcRuntimeSync(inputFunction);
    return new Promise((resolve, reject) => {
        resolve(floatFixing(runtime, 3));
    });
}

/**
 * This method provides you with the execution time of an async function with a callback function
 * @param {Function} inputFunction
 * @param {Function} cb
 * @callback Function err | runtime
 */
function getRuntimeCb(inputFunction, cb) {
    try {
        if (typeof cb !== "function") {
            cb = (err) => console.log(err);
            throw "callback function in getRuntimeCb not defined!";
        }
        calcRuntimeSync(inputFunction).then((runtime) => {
            cb(null, runtime);
        });
    } catch (error) {
        cb(error, null);
    }
}

/**
 * Pass as many functions as you want to this method and get the fastest function based on execution time
 * @param  {...Function} inputFunctions
 * @returns {Function} faster function
 */
function getFasterFunc(...inputFunctions) {
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
}

/**
 * Pass as many async functions as you want to this method and get the fastest async function based on execution time
 * @param  {...Function} inputFunctions
 * @returns {Promise} faster function
 */
async function getFasterFuncSync(...inputFunctions) {
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
}

/**
 * Pass as many async functions as you want to this method and get the fastest async function based on execution time
 * @param  {Array} inputFunctionsArr Array of Functions
 * @callback Function err | fasterFunction
 */
function getFasterFuncCb(inputFunctionsArr, cb) {
    try {
        if (typeof cb !== "function") {
            cb = (err) => console.log(err);
            throw "callback function in getRuntimeCb not defined!";
        }
        const runTimes = [];
        let fasterRuntimeIndex = -1;
        let fasterRuntime = Infinity;
        for (const func of inputFunctionsArr) {
            const runtime = calcRuntimeSync(func);
            runTimes.push(runtime);
        }
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
                cb(null, inputFunctionsArr[fasterRuntimeIndex]);
            });
    } catch (error) {
        cb(error, null);
    }
}


function getMultiRuntime(inputFunction,options = {ignoreFirstTime : false,runtimeCount : 5}){
    const runTimes = [];
    const {ignoreFirstTime,runtimeCount} = options

    let  runCount = runtimeCount !== undefined ? runtimeCount : 5;
    if(ignoreFirstTime === true){
        runCount++;
    }

    for(let i = 0;i < runCount;i++){
        const runtime = floatFixing(calcRuntime(inputFunction), 5);
        if(i === 0 && ignoreFirstTime === true){
            continue;
        }
        runTimes.push(runtime);
    }
    return {
        runtimeCount: ignoreFirstTime === true ? runCount-1 : runCount,
        runtimes: [...runTimes],
    };
}

module.exports = {
    getRuntime,
    getFasterFunc,
    getRuntimeSync,
    getRuntimeCb,
    getFasterFuncSync,
    getFasterFuncCb,
    getMultiRuntime,
};
