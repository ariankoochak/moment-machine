const inpFunc1 = ()=>{
    let a = 324563;
    let b = 232143214;
    c = b - a;
    c = c**2;
}

const inpFunc2 = () => {
    let a = 324563;
    let b = 232143214;
    c = b - a;
    c = c ** 3;
};

const inpFunc3 = () => {
    let a = 324563;
    let b = 232143214;
    c = b - a;
    c = c ** 4;
};

const inpFuncSync1 = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};

const inpFuncSync2 = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 500);
    });
};

const inpFuncSync3 = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 3000);
    });
};

module.exports = {
    inpFunc1,
    inpFunc2,
    inpFunc3,
    inpFuncSync1,
    inpFuncSync2,
    inpFuncSync3
}