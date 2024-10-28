const { getMultiRuntimeCb } = require("..");
const {inpFuncSync2} = require("./testFunctions");

test("getMultiRuntimeCb-1", async () => {
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

test("getMultiRuntimeCb-2", async () => {
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

test("getMultiRuntimeCb-3", async () => {
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

test("getMultiRuntimeCb-4", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(
                inpFuncSync2,
                (err, res) => {
                    if (
                        Object.keys(res).length === 5 &&
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

test("getMultiRuntimeCb-5", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(
                inpFuncSync2,
                (err, res) => {
                    if (
                        Object.keys(res).length === 5 &&
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

test("getMultiRuntimeCb-6", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(
                inpFuncSync2,
                (err, res) => {
                    if (
                        Object.keys(res).length === 5 &&
                        res.runtimeCount === 5
                    ) {
                        resolve(true);
                    }
                    reject(false);
                },
                { moreDetails: true ,ignoreFirstTime : true}
            );
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});

test("getMultiRuntimeCb-7", async () => {
    const testFunc = async () => {
        return new Promise((resolve, reject) => {
            getMultiRuntimeCb(
                inpFuncSync2,
                (err, res) => {
                    if (
                        Object.keys(res).length === 5 &&
                        res.runtimeCount === 13
                    ) {
                        resolve(true);
                    }
                    reject(false);
                },
                { moreDetails: true, ignoreFirstTime: true ,runtimeCount : 13}
            );
        });
    };
    await expect(testFunc()).resolves.toBe(true);
});