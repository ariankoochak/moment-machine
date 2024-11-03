const { getFasterFunctionSync } = require("../..");
const { inpFuncSync1,inpFuncSync2,inpFuncSync3 } = require("../testFunctions");

test("getFasterFunctionSync-1", async () => {
    await expect(
        getFasterFunctionSync(inpFuncSync1, inpFuncSync2, inpFuncSync3)
    ).resolves.toBeInstanceOf(Function);
});
