const { getMultiRuntime } = require("..");
const { inpFunc1 } = require("./testFunctions");

test("getMultiRuntime", () => {
    const test = () => {
        const res = getMultiRuntime(inpFunc1);
        if(Object.keys(res).length === 2 && res.runtimeCount === 5){
            return true;
        }
        return false
    };
    expect(test()).toBe(true);
});

test("getMultiRuntime", () => {
    const test = () => {
        const res = getMultiRuntime(inpFunc1,{runtimeCount : 10});
        if (Object.keys(res).length === 2 && res.runtimeCount === 10) {
            return true;
        }
        return false;
    };
    expect(test()).toBe(true);
});

test("getMultiRuntime", () => {
    const test = () => {
        const res = getMultiRuntime(inpFunc1, { ignoreFirstTime: true });
        if (Object.keys(res).length === 2 && res.runtimeCount === 5) {
            return true;
        }
        return false;
    };
    expect(test()).toBe(true);
});


test("getMultiRuntime", () => {
    const test = () => {
        const res = getMultiRuntime(inpFunc1,{moreDetails : true});
        if (Object.keys(res).length === 5 && res.runtimeCount === 5) {
            return true;
        }
        return false;
    };
    expect(test()).toBe(true);
});

test("getMultiRuntime", () => {
    const test = () => {
        const res = getMultiRuntime(inpFunc1, { ignoreFirstTime: true,moreDetails: true });
        if (Object.keys(res).length === 5 && res.runtimeCount === 5) {
            return true;
        }
        return false;
    };
    expect(test()).toBe(true);
});

test("getMultiRuntime", () => {
    const test = () => {
        const res = getMultiRuntime(inpFunc1, {
            runtimeCount: 13,
            moreDetails: true,
        });
        if (Object.keys(res).length === 5 && res.runtimeCount === 13) {
            return true;
        }
        return false;
    };
    expect(test()).toBe(true);
});

test("getMultiRuntime", () => {
    const test = () => {
        const res = getMultiRuntime(inpFunc1, {
            runtimeCount: 13,
            moreDetails: true,
            ignoreFirstTime : true,
        });
        console.log(res.average);
        
        if (Object.keys(res).length === 5 && res.runtimeCount === 13) {
            return true;
        }
        return false;
    };
    expect(test()).toBe(true);
});