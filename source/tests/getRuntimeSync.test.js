const { getRuntimeSync } = require("..");
const { inpFuncSync1, inpFuncSync2, inpFuncSync3 } = require("./testFunctions");

test("getRuntimeSync", async () => {
    await expect(getRuntimeSync(inpFuncSync1)).resolves.toBeGreaterThanOrEqual(0);
});

// test("getFasterFunc", () => {
//     expect(getFasterFunc(inpFunc1, inpFunc2)).toBeInstanceOf(Function);
// });

// test("getFasterFunc", () => {
//     expect(getFasterFunc(inpFunc1, inpFunc2, inpFunc3)).toBeInstanceOf(
//         Function
//     );
// });
