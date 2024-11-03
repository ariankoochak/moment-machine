const { compareFunctionsCb } = require("../..");
const { inpFuncSync1,inpFuncSync2,inpFuncSync3 } = require("../testFunctions");

test("compareFunctions-1", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            compareFunctionsCb((err,res)=>{
                if(Object.keys(res).length === 2 && res.firstRuntimes.fastest.length === 2){
                    resolve(true)
                }
                reject(false)
            },5,inpFuncSync1,inpFuncSync2,inpFuncSync3);
        });
    };
    await expect(testFunc()).resolves.toBe(true);
},20000);

test("compareFunctions-2", async () => {
     const testFunc = async () => {
        return new Promise((resolve, reject) => {
            compareFunctionsCb((err,res)=>{
                if(Object.keys(res).length === 2 && res.multiRuntimes.fastestRun.length === 2){
                    resolve(true)
                }
                reject(false)
            },5,inpFuncSync1,inpFuncSync2,inpFuncSync3);
        });
    };
    await expect(testFunc()).resolves.toBe(true);
},20000);

test("compareFunctions-3", async () => {
     const testFunc = async () => {
        return new Promise((resolve, reject) => {
            compareFunctionsCb((err,res)=>{
                if(Object.keys(res).length === 2 && res.multiRuntimes.slowestAverage.length === 2){
                    resolve(true)
                }
                reject(false)
            },5,inpFuncSync1,inpFuncSync2,inpFuncSync3);
        });
    };
    await expect(testFunc()).resolves.toBe(true);
},20000);