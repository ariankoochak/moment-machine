module.exports = function (runtimes){
    let fastestTime = Infinity;
    for(const runtime of runtimes){
        if(fastestTime >= runtime){
            fastestTime = runtime;
        }
    }
    return fastestTime
}