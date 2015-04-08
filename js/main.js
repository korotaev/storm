
function init() {




}


function fac(n) {
    if(n == 0) {
        return 1
    } else {
        return n * fac(n - 1);
    }
}


function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1))+1;
}

