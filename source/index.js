const getRuntime = require('./lib/GetRunTime/getRuntime')
const getRuntimeSync = require("./lib/GetRunTime/getRuntimeSync");
const getRuntimeCb = require("./lib/GetRunTime/getRuntimeCb");

const getFasterFunction = require('./lib/GetFasterFunc/getFasterFunction');
const getFasterFuncSync = require('./lib/GetFasterFunc/getFasterFuncSync');
const getFasterFunctionCb = require('./lib/GetFasterFunc/getFasterFunctionCb');

const getMultiRuntime = require('./lib/GetMultiRunTime/getMultiRuntime');
const getMultiRuntimeSync = require("./lib/GetMultiRunTime/getMultiRuntimeSync");
const getMultiRuntimeCb = require("./lib/GetMultiRunTime/getMultiRuntimeCb");

const compareFuncs = require('./lib/CompareFuncs/compareFuncs');
const compareFuncsCb = require("./lib/CompareFuncs/compareFuncsCb");
const compareFuncsSync = require("./lib/CompareFuncs/compareFuncsSync");



module.exports = {
    getRuntime,
    getFasterFunction,
    getRuntimeSync,
    getRuntimeCb,
    getFasterFuncSync,
    getFasterFunctionCb,
    getMultiRuntime,
    getMultiRuntimeSync,
    getMultiRuntimeCb,
    compareFuncs,
    compareFuncsCb,
    compareFuncsSync,
};
