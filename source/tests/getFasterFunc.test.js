const { getFasterFunc } = require("..");
const { inpFunc1,inpFunc2,inpFunc3} = require("./testFunctions");

test("getFasterFunc", () => {
    expect(getFasterFunc(inpFunc1)).toBeInstanceOf(Function);
});

test("getFasterFunc", () => {
    expect(getFasterFunc(inpFunc1,inpFunc2)).toBeInstanceOf(Function);
});

test("getFasterFunc", () => {
    expect(getFasterFunc(inpFunc1,inpFunc2,inpFunc3)).toBeInstanceOf(Function);
});
