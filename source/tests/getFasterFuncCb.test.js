const { getFasterFuncCb } = require("..");
const { inpFuncSync1,inpFuncSync2,inpFuncSync3 } = require("./testFunctions");

test("getFasterFuncCb", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getFasterFuncCb([inpFuncSync1,inpFuncSync2,inpFuncSync3], (err, fasterFunction) => {
                return err === null && typeof fasterFunction === 'function'
                    ? resolve(true)
                    : reject(false);
            });
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});
