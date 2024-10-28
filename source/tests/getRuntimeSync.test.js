const { getRuntimeSync } = require("..");
const { inpFuncSync1} = require("./testFunctions");

test("getRuntimeSync-1", async () => {
    const test = async ()=>{
        let res = await getRuntimeSync(inpFuncSync1);
        if(typeof res === 'number' && isNaN(res) === false){
            return true
        }
        return false
    }
    await expect(test()).resolves.toBe(true);
});
