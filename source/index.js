const getRuntime = require('./lib/GetRunTime/getRuntime')
const getRuntimeSync = require("./lib/GetRunTime/getRuntimeSync");
const getRuntimeCb = require("./lib/GetRunTime/getRuntimeCb");

const getFasterFunc = require('./lib/GetFasterFunc/getFasterFunc');
const getFasterFuncSync = require('./lib/GetFasterFunc/getFasterFuncSync');
const getFasterFuncCb = require('./lib/GetFasterFunc/getFasterFuncCb');

const getMultiRuntime = require('./lib/GetMultiRunTime/getMultiRuntime');
const getMultiRuntimeSync = require("./lib/GetMultiRunTime/getMultiRuntimeSync");
const getMultiRuntimeCb = require("./lib/GetMultiRunTime/getMultiRuntimeCb");

const compareFuncs = require('./lib/CompareFuncs/compareFuncs');
const compareFuncsCb = require("./lib/CompareFuncs/compareFuncsCb");



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
    compareFuncs,
    compareFuncsCb
};
