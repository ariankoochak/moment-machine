module.exports = async (inputFunction)=>{
    const start = performance.now();
    await inputFunction();
    const end = performance.now();
    return (end-start);
}