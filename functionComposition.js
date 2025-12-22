function compose(functions) {
    if(functions.length === 0){
        return x => x;
    }
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc) , x);
    }
};