const floatFixing = require("./utils/floatFixing");
const getRuntime = require("./utils/getRuntime");


/**
 * With this method, you can get the execution time of the function (in milliseconds). Usually, the first execution of the function takes more time than subsequent executions
 * @param {Function} inputFunction 
 * @returns {number}
 */
function getFirstRuntime(inputFunction){
    return floatFixing(getRuntime(inputFunction),3);
}


module.exports = {
    getFirstRuntime,
}