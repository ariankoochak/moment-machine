const floatFixing = require("./utils/floatFixing");
const calcRuntime = require("./utils/calcRuntime");
const testFunc = require('./tests/testFunctions');
const calcRuntimeSync = require("./utils/calcRuntimeSync");


/**
 * With this method, you can get the execution time of the function (in milliseconds). Usually, the first execution of the function takes more time than subsequent executions
 * @param {Function} inputFunction 
 * @returns {number} runtime => milliseconds
 */
function getRuntime(inputFunction){
    return floatFixing(calcRuntime(inputFunction),3);
}

/**
 * This method calculates the execution time of the async function and provides it to you in the form of a promise
 * @param {Function} inputFunction 
 * @return {Promise} runtime => milliseconds
 */
async function getRuntimeSync(inputFunction){
    const runtime = await calcRuntimeSync(inputFunction);
    return new Promise((resolve,reject)=>{
        resolve(floatFixing(runtime, 3));
    })
}

/**
 * This method provides you with the execution time of an async function with a callback function
 * @param {Function} inputFunction 
 * @param {Function} cb 
 * @callback Function err | runtime
 */
function getRuntimeCb(inputFunction,cb){
    try {
        if(typeof cb !== 'function'){
            cb = err=>console.log(err)
            throw('callback function in getRuntimeCb not defined!')
        }
        calcRuntimeSync(inputFunction).then((runtime)=>{
            cb(null,runtime)
        })
    } catch (error) {
        cb(error,null)
    }
}

/**
 * Pass as many functions as you want to this method and get the fastest function based on execution time
 * @param  {...Function} inputFunctions 
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

/**
 * Pass as many async functions as you want to this method and get the fastest async function based on execution time
 * @param  {...Function} inputFunctions 
 * @returns {Promise} faster function
 */
async function getFasterFuncSync(...inputFunctions){
    const runTimes = []
    let fasterRuntimeIndex = -1;
    let fasterRuntime = Infinity;
    for(const func of inputFunctions){
        const runtime = calcRuntimeSync(func);
        runTimes.push(runtime);
    }
    return new Promise((resolve,reject)=>{
        Promise.all(runTimes).then((solvedRunTimes)=>{
            for(let i = 0;i < solvedRunTimes.length;i++){
                if(fasterRuntime > solvedRunTimes[i]){
                    fasterRuntime = solvedRunTimes[i];
                    fasterRuntimeIndex = i
                }
            }
        }).then(()=>{
            resolve(inputFunctions[fasterRuntimeIndex])
        })
    })
    
}


module.exports = {
    getRuntime,
    getFasterFunc,
    getRuntimeSync,
    getRuntimeCb,
    getFasterFuncSync,
}