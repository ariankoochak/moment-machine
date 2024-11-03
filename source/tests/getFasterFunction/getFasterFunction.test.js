const { getFasterFunction } = require("../..");
const { inpFunc1,inpFunc2,inpFunc3} = require("../testFunctions");

test("getFasterFunction-1", () => {
    expect(getFasterFunction(inpFunc1)).toBeInstanceOf(Function);
});

test("getFasterFunction-2", () => {
    expect(getFasterFunction(inpFunc1,inpFunc2)).toBeInstanceOf(Function);
});

test("getFasterFunction-3", () => {
    expect(getFasterFunction(inpFunc1,inpFunc2,inpFunc3)).toBeInstanceOf(Function);
});
