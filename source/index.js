const getRuntime = require('./lib/GetRunTime/getRuntime')
const getRuntimeSync = require("./lib/GetRunTime/getRuntimeSync");
const getRuntimeCb = require("./lib/GetRunTime/getRuntimeCb");

const getFasterFunction = require('./lib/GetFasterFunction/getFasterFunction');
const getFasterFunctionSync = require('./lib/GetFasterFunction/getFasterFunctionSync');
const getFasterFunctionCb = require('./lib/GetFasterFunction/getFasterFunctionCb');

const getMultiRuntime = require('./lib/GetMultiRunTime/getMultiRuntime');
const getMultiRuntimeSync = require("./lib/GetMultiRunTime/getMultiRuntimeSync");
const getMultiRuntimeCb = require("./lib/GetMultiRunTime/getMultiRuntimeCb");

const compareFunctions = require('./lib/CompareFunctions/compareFunctions');
const compareFunctionsCb = require("./lib/CompareFunctions/compareFunctionsCb");
const compareFunctionsSync = require("./lib/CompareFunctions/compareFunctionsSync");



module.exports = {
    getRuntime,
    getFasterFunction,
    getRuntimeSync,
    getRuntimeCb,
    getFasterFunctionSync,
    getFasterFunctionCb,
    getMultiRuntime,
    getMultiRuntimeSync,
    getMultiRuntimeCb,
    compareFunctions,
    compareFunctionsCb,
    compareFunctionsSync,
};
