const calcRuntimeSync = require("../../utils/calcRuntimeSync");

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

module.exports = getRuntimeCb;
