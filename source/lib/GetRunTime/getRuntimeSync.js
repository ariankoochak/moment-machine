const floatFixing = require("../../utils/floatFixing");
const calcRuntimeSync = require("../../utils/calcRuntimeSync");

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

module.exports = getRuntimeSync;
