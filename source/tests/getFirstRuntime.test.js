const { getFirstRuntime } = require("..");
const { inpFunc1 } = require("./testFunctions");

test("getFirstRunTime", () => {
    expect(getFirstRuntime(inpFunc1)).toBeGreaterThanOrEqual(0);
});

test("getFirstRunTime => not a function", () => {
    const testFunc = ()=>{
        return getFirstRuntime(3);
    }
    expect(testFunc).toThrow();
});
