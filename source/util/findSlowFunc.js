module.exports = function(itemArr){
        let slowestTime = -1;
        let slowestIndex = 0;
        for (let i = 0; i < itemArr.length; i++) {
            if (slowestTime < itemArr[i].runTime) {
                slowestTime = itemArr[i].runTime;
                slowestIndex = i;
            }
        }
        return itemArr[slowestIndex].func;
}