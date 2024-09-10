module.exports = function(itemArr){
    let fastestTime = Infinity;
    let fastestIndex = 0;
    for(let i = 0;i < itemArr.length;i++){
        if(fastestTime > itemArr[i].runTime){
            fastestTime = itemArr[i].runTime;
            fastestIndex = i;
        }
    }
    return itemArr[fastestIndex].func;
}