const floatFixing = require("../../utils/floatFixing");
const calcRuntime = require("../../utils/calcRuntime");

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

module.exports = getRuntime;
