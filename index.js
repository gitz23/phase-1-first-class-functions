function receivesAFunction(callBack, num){
    return callBack(num);
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}

