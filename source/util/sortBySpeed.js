const floatFixing = require("./floatFixing");

module.exports = function(itemArr){
    let fastestTime = Infinity;
    let fastestIndex = null;
    let i = 0;
    const sortedArr = [];
    while(itemArr.length > 0){
        if(itemArr[i].runTime < fastestTime){
            fastestIndex = i;
            fastestTime = itemArr[i].runTime;
        }
        if(i === itemArr.length - 1){
            i = -1;
            sortedArr.push({function : itemArr[fastestIndex].func , runTime : floatFixing(itemArr[fastestIndex].runTime)});
            itemArr.splice(fastestIndex,1);
            fastestIndex = null;
            fastestTime = Infinity;
        }
        i++;
    }
    return sortedArr;
}