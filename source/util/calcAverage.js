module.exports = function(itemArr){
    let sum = 0;
    for(const item of itemArr){
        sum += item
    }
    return sum / itemArr.length
}