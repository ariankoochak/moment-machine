const { compareFuncsSync } = require("..");
const { inpFuncSync1,inpFuncSync2,inpFuncSync3 } = require("./testFunctions");

test("compareFuncs-1", async () => {
    const testFunc = async () => {
        const res = await compareFuncsSync(5,inpFuncSync1,inpFuncSync2,inpFuncSync3);
        if(Object.keys(res).length === 2 && res.firstRuntimes.fastest.length === 2){
            return true
        }
        return false
    };
    await expect(testFunc()).resolves.toBe(true);
},20000);

test("compareFuncs-2", async () => {
     const testFunc = async () => {
        const res = await compareFuncsSync(5,inpFuncSync1,inpFuncSync2,inpFuncSync3);
        if (Object.keys(res).length === 2 &&res.multiRuntimes.fastestRun.length === 2) {
            return true;
        }
        return false;
    };
    await expect(testFunc()).resolves.toBe(true);
},20000);

test("compareFuncs-3", async () => {
     const testFunc = async () => {
        const res = await compareFuncsSync(5,inpFuncSync1,inpFuncSync2,inpFuncSync3);
        if (Object.keys(res).length === 2 &&res.multiRuntimes.slowestAverage.length === 2) {
            return true;
        }
        return false;
    };
    await expect(testFunc()).resolves.toBe(true);
},20000);