module.exports = function(inputArr){
    let sum = 0;
    for(const item of inputArr){
        sum += item;
    }
    return sum / inputArr.length
}