const { getRuntime } = require("..");
const { inpFunc1 } = require("./testFunctions");

test("getRuntime-1", () => {
    expect(getRuntime(inpFunc1)).toBeGreaterThanOrEqual(0);
});

test("getRuntime-2 => not a function", () => {
    const testFunc = ()=>{
        return getRuntime(3);
    }
    expect(testFunc()).toBe(undefined);
});
