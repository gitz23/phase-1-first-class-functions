function receivesAFunction(callBack){
    return callBack();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}

