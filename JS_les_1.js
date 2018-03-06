// function getType(arg) {
//     var typeOfArg = typeof arg;
//
//     if(typeOfArg === 'string'){
//         console.log("This is a string");
//     }
//
//     if (typeOfArg === 'number'){
//         console.log("this is a number");
//     }
// }
//
// getType('string');
// getType(123);


function isPrime(number) {
    if (number >= 1000) console.log('too big');
    if (number == 1) return false;

    for (var i = 2; i < number; i++){
        if ((number % i) == 0){
            return false;
        }
    }

   return true;
}

var isPrimeNumber = isPrime(11);

if (isPrimeNumber == true){
    console.log('число простое');
} else if (isPrimeNumber == false){
    console.log('число не простое');
}
