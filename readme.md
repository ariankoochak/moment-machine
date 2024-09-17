![moment-machine](./Logo-text.png)

[moment-machine.com](https://www.moment-machine.com)
# Moment-machine
moment-machine is an open source package that you can use to easily get and check the execution time of your functions.

## install
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):
```sh
$ npm install moment-machine
```
## Usage
To use moment-machine, you must call it according to your use of common js or es module

Common JS
```js
const momentMachine = require('moment-machine');

const testFunction = ()=>{
    let a = 2345345436;
    let b = 45364536457;
    let c = a * b;
    c = c**2
}

momentMachine.getRuntime(testFunction) //0.009
```
 

ES Module
```js
import { getRuntime } from "moment-machine";

const testFunction = ()=>{
    let a = 2345345436;
    let b = 45364536457;
    let c = a * b;
    c = c**2
}

getRuntime(testFunction) //0.009
```
## Features
getRuntime
```js
const testFunction = ()=>{
    let a = 2345345436;
    let b = 45364536457;
    let c = a * b;
    c = c**2
}

getRuntime(testFunction) //0.009
```
getRuntimeCb
```js
const inpFuncSync1 = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};

getRuntimeCb(inpFuncSync1,(err,runtime)=>{
    console.log(runtime);//2002.993833
})
```

getRuntimeSync
```js
const inpFuncSync1 = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};

const momentMachine = async () => {
    const runtime = await getRuntimeSync(inpFuncSync1);
    console.log(runtime);//2002.993833
};

momentMachine();
```

getFasterFunc
```js
const testFunction1 = () => {
    let a = 2345345436;
    let b = 45364536457;
    let c = a * b;
};

const testFunction2 = () => {
    let a = 2345345436343343434n;
    let b = 4536453645343474545n;
    let c = a * b;
};

getFasterFunc(testFunction1,testFunction2)//[Function: testFunction1]
```

getFasterFuncCb
```js
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

getFasterFuncCb([inpFuncSync1,inpFuncSync2,inpFuncSync3],(err,fasterFunc)=>{
    console.log(fasterFunc);//[AsyncFunction: inpFuncSync2]
})
```

getFasterFuncSync
```js
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

const momentMachine = async () => {
    const fasterFunc = await getFasterFuncSync(inpFuncSync1,inpFuncSync2,inpFuncSync3);
    console.log(fasterFunc);//[AsyncFunction: inpFuncSync2]
};

momentMachine();
```