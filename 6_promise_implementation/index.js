// Implement MyPromise class, which will work exactly the same as Promise.
// It is enough to implement the methods: then, catch, finally
// Methods `all` and `race` do not need to be done

// how promises work
// var promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 2000);
// });

// promise
//     .then(num => console.log(num *= 2))
//     .catch(err => console.log(err))
//     .then(num => num *= 3)
//     .finally(() => console.log('finally'));

// 1. Promise is a class
// 2. to the constructor of this class we pass a function that takes 2 parameters:
// resolve and reject and this 2 params are taken akready somewhere from Promise
// 3. now we understand that we passing callback to the constructor
// 4. we also know that this callback will be called as soon as it is announced
// 5. the callback takes 2 parameters: fns resolve and reject - we also need to create them
// (resolver and rejecter in our case)
// 6. what we get as an instance of the class `new Promise` (promise) it's an obj
// which has at least 3 methods - `then`, `catch` and `finally` - they takes as params fns (cb - callback)
// these methods should not contain logic for data transformation,
// but they should remember which callbacks we transfer here and just call them at the right time



class myPromise {
    // implementing the constructor we know that we get some callback
    constructor(callback) {
        this.onCatch = null;
        this.onFinally = null;

        function resolver() {}

        function rejecter() {}

        callback(resolver, rejecter);
    }

    // can be called an infinite number of times
    then(cb) {

    }

    // we can call this method only 1 time (cause the error is processed only once)
    catch(cb) {
        // that's how we will remember this callback (cb)
        this.onCatch = cb;
    }

    // also called only 1 time
    finally (cb) {
        // that's how we will remember this callback (cb)
        this.onFinally = cb;

    }
}