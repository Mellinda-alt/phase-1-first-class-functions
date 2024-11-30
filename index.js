function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    function namedFunction() {
        // function body here
    }
    return namedFunction
}


const returnsAnAnonymousFunction = () => {
    return function (){
        // function body here

    }
}

const myAnonymousFunction = receivesAFunction();
myAnonymousFunction();