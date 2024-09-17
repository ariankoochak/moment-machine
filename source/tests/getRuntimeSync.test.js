const { getRuntimeSync } = require("..");
const { inpFuncSync1} = require("./testFunctions");

test("getRuntimeSync", async () => {
    await expect(getRuntimeSync(inpFuncSync1)).resolves.toBeGreaterThanOrEqual(0);
});
