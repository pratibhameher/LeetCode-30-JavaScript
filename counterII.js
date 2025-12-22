function createCounter(init) {
    let count = init;
    const val = init;
    return{
        increment: function(){
            count++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        },
        reset: function(){
            count = val;
            return count;
        }
    }
};
