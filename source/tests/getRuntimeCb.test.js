const { getRuntimeCb } = require("..");
const { inpFuncSync1 } = require("./testFunctions");

test("getRuntimeCb", async () => {
    const testFunc = async () => {
        return new Promise((resolve,reject)=>{
            getRuntimeCb(inpFuncSync1, (err, runtime) => {
                return err === null && typeof runtime === "number" ? resolve(true) : reject(false);
            });
        })
    };
    await expect(testFunc()).resolves.toBe(true);
});
