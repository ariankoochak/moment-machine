const floatFixing = require("./floatFixing")

module.exports = function(itemArr,numberOfFloat = 5){
    for(let i = 0;i < itemArr.length;i++){
        itemArr[i] = floatFixing(itemArr[i],numberOfFloat);
    }
    return itemArr;
}