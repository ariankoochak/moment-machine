const { getFasterFuncSync } = require("..");
const { inpFuncSync1,inpFuncSync2,inpFuncSync3 } = require("./testFunctions");

test("getFasterFuncSync", async () => {
    await expect(
        getFasterFuncSync(inpFuncSync1,inpFuncSync2,inpFuncSync3)
    ).resolves.toBeInstanceOf(Function);
});