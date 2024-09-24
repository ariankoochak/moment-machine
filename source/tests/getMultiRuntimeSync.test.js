const { getMultiRuntimeSync } = require("..");
const { inpFuncSync2 } = require("./testFunctions");

test("getMultiRuntimeSync", async () => {
    await expect(
        getMultiRuntimeSync(inpFuncSync2)
    ).resolves.toBeInstanceOf(Object);
});

test("getMultiRuntimeSync", async () => {
    const test = async ()=>{
        const res = await getMultiRuntimeSync(inpFuncSync2,{runtimeCount : 10});
        if (Object.keys(res).length === 2 && res.runtimeCount === 10) {
            return true;
        }
        return false;
    }
    await expect(test()).resolves.toEqual(true);
});

test("getMultiRuntimeSync", async () => {
    const test = async ()=>{
        const res = await getMultiRuntimeSync(inpFuncSync2,{ ignoreFirstTime: true });
        if (Object.keys(res).length === 2 && res.runtimeCount === 5) {
            return true;
        }
        return false;
    }
    await expect(test()).resolves.toEqual(true);
});

test("getMultiRuntimeSync", async () => {
    const test = async () => {
        const res = await getMultiRuntimeSync(inpFuncSync2, {
            moreDetails: true,
        });
        if (Object.keys(res).length === 4 && res.runtimeCount === 5) {
            return true;
        }
        return false;
    };
    await expect(test()).resolves.toEqual(true);
});

test("getMultiRuntimeSync", async () => {
    const test = async () => {
        const res = await getMultiRuntimeSync(inpFuncSync2, {
            ignoreFirstTime: true,
            moreDetails: true,
        });
        if (Object.keys(res).length === 4 && res.runtimeCount === 5) {
            return true;
        }
        return false;
    };
    await expect(test()).resolves.toEqual(true);
});

test("getMultiRuntimeSync", async () => {
    const test = async () => {
        const res = await getMultiRuntimeSync(inpFuncSync2, {
            runtimeCount: 13,
            moreDetails: true,
        });
        if (Object.keys(res).length === 4 && res.runtimeCount === 13) {
            return true;
        }
        return false;
    };
    await expect(test()).resolves.toEqual(true);
});

test("getMultiRuntimeSync", async () => {
    const test = async () => {
        const res = await getMultiRuntimeSync(inpFuncSync2, {
            ignoreFirstTime: true,
            moreDetails: true,
            runtimeCount : 13
        });
        if (Object.keys(res).length === 4 && res.runtimeCount === 13) {
            return true;
        }
        return false;
    };
    await expect(test()).resolves.toEqual(true);
});