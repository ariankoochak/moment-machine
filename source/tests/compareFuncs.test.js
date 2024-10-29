const { compareFuncs } = require("..");
const { inpFunc1,inpFunc2,inpFunc3 } = require("./testFunctions");

test("compareFuncs-1", () => {
    const test = () => {
        const res = compareFuncs(5,inpFunc1,inpFunc2,inpFunc3);
        if(Object.keys(res).length === 2 && res.firstRuntimes.fastest.length === 2){
            return true
        }
        return false
    };
    expect(test()).toBe(true);
});

test("compareFuncs-2", () => {
    const test = () => {
        const res = compareFuncs(10,inpFunc1,inpFunc2,inpFunc3);
        if(Object.keys(res).length === 2 && res.multiRuntimes.fastestRun.length === 2){
            return true
        }
        return false;
    };
    expect(test()).toBe(true);
});

test("compareFuncs-3", () => {
    const test = () => {
        const res = compareFuncs(15,inpFunc1,inpFunc2,inpFunc3);
        if(Object.keys(res).length === 2 && res.multiRuntimes.slowestAverage.length === 2){
            return true
        }
        return false;
    };
    expect(test()).toBe(true);
});