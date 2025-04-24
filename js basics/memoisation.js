// Memoisation is a programming technique which attempts to increase a functions performance by caching its previously computed results. Each time a memoized function is called , its parameters are called to index the cache. If the data is present, then it can be returned without executing the entire function.Otherwise the function is executed and then the result is added to the cache.

const memoizAddition = () => {
    let cache = {};
    return (value) => {
        if (value in cache){
            console.log('Fetching from Cache');
            return cache[value];//Here cache.value cannot be used as property name starts with t
        }else {
            console.log('Calculating Result');
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    }
}
// return function from memoizAddition

const addition = memoizAddition();
console.log(addition(20)); //output : 40 calculated
console.log(addition(20)); //output : 40 cached