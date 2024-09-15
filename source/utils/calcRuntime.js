module.exports = (inputFunction)=>{
    const start = performance.now();
    inputFunction();
    const end = performance.now();
    return (end-start);
}