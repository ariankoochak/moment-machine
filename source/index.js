const calcAverage = require("./util/calcAverage");
const findFastFunc = require("./util/findFastFunc");
const findSlowFunc = require("./util/findSlowFunc");
const floatFixing = require("./util/floatFixing");
const floatFixingOnAllIndex = require("./util/floatFixingOnAllIndex");
const sortBySpeed = require("./util/sortBySpeed");

class momentMachine {

    getOptimizedRunTime(inpFunc, options = { runTimeCount: 5 ,getRunTimeLists : false}) {
        let times = [];
        if(typeof options.runTimeCount !== 'number' || options.runTimeCount > 1000){
            options.runTimeCount = 5;
        }
        if(typeof options.getRunTimeLists !== 'boolean'){
            options.getRunTimeLists = false
        }
        inpFunc();
        for (let i = 0; i < options.runTimeCount; i++) {
            let start = performance.now();
            inpFunc();
            let end = performance.now();
            times.push(end-start);
        }
        
        let returnObject = {
            runTimeAverage : floatFixing(calcAverage(times)),
        }
        
        if(options.getRunTimeLists){
            returnObject = {...returnObject,allRunTimes : floatFixingOnAllIndex(times)}
        }
        return returnObject;
    }

    getFirstRunTime(inpFunc) {
        let start = performance.now();
        inpFunc();
        let end = performance.now();
        return floatFixing(end-start);
    }

    compareFunctionsInFirstRunTime(...inpFuncs){
        let runTimes = [];
        for(const inpFunc of inpFuncs){
            let start = performance.now();
            inpFunc();
            let end = performance.now();
            runTimes.push({func : inpFunc,runTime : end-start});
        }

        const fixedRunTimeArrayForReturn = [];
        for(const funcObj of runTimes){
            fixedRunTimeArrayForReturn.push({function : funcObj.func, runTime : floatFixing(funcObj.runTime)})
        }
        
        let returnObject = {
            fastestFunction : findFastFunc(runTimes),
            slowestFunction : findSlowFunc(runTimes),
            sortedBySpeed : sortBySpeed(runTimes),
            runTimesList :  fixedRunTimeArrayForReturn,
        }

        return returnObject;
    }
}

module.exports = new momentMachine();
