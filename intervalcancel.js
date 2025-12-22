var cancellable = function(fn, args, t) {
    fn(...args);

    const invalidId = setInterval(() => {
         fn(...args);
    } , t);

    return function cancel(){
        clearInterval(invalidId);
    };
};