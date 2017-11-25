//Write a function isEven(), which takes a single numeric argument and returns true if the number is even, and false otherwise

function isEven(input){
    var num = parseFloat(input);
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

