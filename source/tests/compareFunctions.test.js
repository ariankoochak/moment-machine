const { compareFunctions } = require("..");
const { inpFunc1,inpFunc2,inpFunc3 } = require("./testFunctions");

test("compareFunctions-1", () => {
    const test = () => {
        const res = compareFunctions(5,inpFunc1,inpFunc2,inpFunc3);
        if(Object.keys(res).length === 2 && res.firstRuntimes.fastest.length === 2){
            return true
        }
        return false
    };
    expect(test()).toBe(true);
});

test("compareFunctions-2", () => {
    const test = () => {
        const res = compareFunctions(10,inpFunc1,inpFunc2,inpFunc3);
        if(Object.keys(res).length === 2 && res.multiRuntimes.fastestRun.length === 2){
            return true
        }
        return false;
    };
    expect(test()).toBe(true);
});

test("compareFunctions-3", () => {
    const test = () => {
        const res = compareFunctions(15,inpFunc1,inpFunc2,inpFunc3);
        if(Object.keys(res).length === 2 && res.multiRuntimes.slowestAverage.length === 2){
            return true
        }
        return false;
    };
    expect(test()).toBe(true);
});