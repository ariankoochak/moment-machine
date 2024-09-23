const floatFixing = require("./utils/floatFixing");
const calcRuntime = require("./utils/calcRuntime");
const calcRuntimeSync = require("./utils/calcRuntimeSync");
const findFastestRuntime = require("./utils/findFastestRuntime");
const findSlowestRuntime = require("./utils/findSlowestRuntime");

/**
 * With this method, you can get the execution time of the function (in milliseconds). Usually, the first execution of the function takes more time than subsequent executions
 * @param {Function} inputFunction
 * @returns {number} runtime => milliseconds
 */
function getRuntime(inputFunction) {
    try {
        return floatFixing(calcRuntime(inputFunction), 3);        
    } catch (error) {
        console.log(error);
    }
}

/**
 * This method calculates the execution time of the async function and provides it to you in the form of a promise
 * @param {Function} inputFunction
 * @return {Promise} runtime => milliseconds
 */
async function getRuntimeSync(inputFunction) {
    try {
        const runtime = await calcRuntimeSync(inputFunction);
        return new Promise((resolve, reject) => {
            resolve(floatFixing(runtime, 3));
        });
    } catch (error) {
        console.log(error);
    }
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

/**
 * Pass as many async functions as you want to this method and get the fastest async function based on execution time
 * @param  {...Function} inputFunctions
 * @returns {Promise} faster function
 */
async function getFasterFuncSync(...inputFunctions) {
    try {
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
    } catch (error) {
        console.log(error);
    }
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

/**
 * This method executes a function several times and calculates its execution time several times and puts it in an array.
 * @param {Function} inputFunction The function we want to calculate its execution times
 * @param {Boolean} options.ignoreFirstTime In this method, you can set this key to true and the first execution is not considered.
 * @param {Number} options.runtimeCount The number of times you want this function to be executed and its time taken
 * @returns {Object}
 */
function getMultiRuntime(
    inputFunction,
    options = { ignoreFirstTime: false, runtimeCount: 5 ,moreDetails : false}
) {
    try {
        const runTimes = [];
        const { ignoreFirstTime, runtimeCount , moreDetails} = options;
        
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

        if(moreDetails === true){
            return {
                runtimeCount: ignoreFirstTime === true ? runCount - 1 : runCount,
                fastestRuntimes : findFastestRuntime(runTimes),
                slowestRuntimes : findSlowestRuntime(runTimes),
                runtimes: [...runTimes],
            };
        }
        else {
            return {
                runtimeCount: ignoreFirstTime === true ? runCount - 1 : runCount,
                runtimes: [...runTimes],
            };
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * This method executes a async function several times and calculates its execution time several times and puts it in an array.
 * @param {Function} inputFunction The async function we want to calculate its execution times
 * @param {{ ignoreFirstTime: boolean; runtimeCount: number; }} [options={ ignoreFirstTime: false, runtimeCount: 5 }] ignoreFirstTime → In this method, you can set this key to true and the first execution is not considered. runtimeCount → The number of times you want this function to be executed and its time taken
 * @returns {Promise} Promise → Returns the promise that contains the runtimes
 */
async function getMultiRuntimeSync(
    inputFunction,
    options = { ignoreFirstTime: false, runtimeCount: 5 ,moreDetails : false}
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
            Promise.all(runTimes)
                .then((solvedRunTimes) => {
                    if (options.moreDetails === true) {
                        resolve({
                            runtimeCount:
                                ignoreFirstTime === true
                                    ? runCount - 1
                                    : runCount,
                            fastestRuntimes: findFastestRuntime(solvedRunTimes),
                            slowestRuntimes: findSlowestRuntime(solvedRunTimes),
                            runtimes: [...solvedRunTimes],
                        });
                    } else {
                        resolve({
                            runtimeCount:
                                ignoreFirstTime === true
                                    ? runCount - 1
                                    : runCount,
                            runtimes: [...solvedRunTimes],
                        });
                    }
                })
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * This method executes an async function several times and calculates its execution time several times and places it in an array, and that array can be accessed in a callback function.
 * @param {Function} inputFunction The async function we want to calculate its execution times
 * @param {Function} cb A function that will be called as a callback and the output will be passed to this function
 * @param {{ ignoreFirstTime: boolean; runtimeCount: number; }} [options={ ignoreFirstTime: false, runtimeCount: 5 }] ignoreFirstTime → In this method, you can set this key to true and the first execution is not considered. , runtimeCount → The number of times you want this function to be executed and its time taken
 * @callback function
 */
function getMultiRuntimeCb(inputFunction,cb,options = { ignoreFirstTime: false, runtimeCount: 5 ,moreDetails : false}){
    try {
        if (typeof cb !== "function") {
            cb = (err) => console.log(err);
            throw "callback function in getRuntimeCb not defined!";
        }
        const runTimes = [];
        const { ignoreFirstTime, runtimeCount,moreDetails} = options;
    
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
                cb(null,{
                    runtimeCount:
                        ignoreFirstTime === true ? runCount - 1 : runCount,
                    fastestRuntimes: findFastestRuntime(solvedRunTimes),
                    slowestRuntimes: findSlowestRuntime(solvedRunTimes),
                    runtimes: [...solvedRunTimes],
                });
            } else {
                cb(null,{
                    runtimeCount:
                        ignoreFirstTime === true ? runCount - 1 : runCount,
                    runtimes: [...solvedRunTimes],
                });
            }
        });
    } catch (error) {
        cb(error,null)
    }
}


module.exports = {
    getRuntime,
    getFasterFunc,
    getRuntimeSync,
    getRuntimeCb,
    getFasterFuncSync,
    getFasterFuncCb,
    getMultiRuntime,
    getMultiRuntimeSync,
    getMultiRuntimeCb,
};
