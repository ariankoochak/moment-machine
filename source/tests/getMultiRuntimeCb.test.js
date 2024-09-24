const { getMultiRuntimeCb } = require("..");
const {inpFuncSync2} = require("./testFunctions");

test("getMultiRuntimeCb", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(inpFuncSync2, (err, res) => {
                if (Object.keys(res).length === 2 && res.runtimeCount === 5) {
                    resolve(true);
                }
                reject(false);
            });
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});

test("getMultiRuntimeCb", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(inpFuncSync2, (err, res) => {
                if (Object.keys(res).length === 2 && res.runtimeCount === 5) {
                    resolve(true);
                }
                reject(false);
            },{ignoreFirstTime : true});
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});

test("getMultiRuntimeCb", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(inpFuncSync2, (err, res) => {
                if (Object.keys(res).length === 2 && res.runtimeCount === 10) {
                    resolve(true);
                }
                reject(false);
            },{runtimeCount : 10});
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});

test("getMultiRuntimeCb", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(
                inpFuncSync2,
                (err, res) => {
                    if (
                        Object.keys(res).length === 4 &&
                        res.runtimeCount === 10
                    ) {
                        resolve(true);
                    }
                    reject(false);
                },
                { runtimeCount: 10,moreDetails : true }
            );
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});

test("getMultiRuntimeCb", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(
                inpFuncSync2,
                (err, res) => {
                    if (
                        Object.keys(res).length === 4 &&
                        res.runtimeCount === 5
                    ) {
                        resolve(true);
                    }
                    reject(false);
                },
                { moreDetails: true }
            );
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});