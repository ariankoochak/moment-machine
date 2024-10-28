const { getFasterFunc } = require("..");
const { inpFunc1,inpFunc2,inpFunc3} = require("./testFunctions");

test("getFasterFunc-1", () => {
    expect(getFasterFunc(inpFunc1)).toBeInstanceOf(Function);
});

test("getFasterFunc-2", () => {
    expect(getFasterFunc(inpFunc1,inpFunc2)).toBeInstanceOf(Function);
});

test("getFasterFunc-3", () => {
    expect(getFasterFunc(inpFunc1,inpFunc2,inpFunc3)).toBeInstanceOf(Function);
});
