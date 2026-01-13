let fizzbuzz = [];
let count = 1

function fizzbuzz(){
 fizzbuzz.push(count);

if(count % 3 === 0){
    fizzbuzz.pop(count);
    fizzbuzz.push("Fizz");
}
else if(count % 5 === 0){
    fizzbuzz.pop(count);
    fizzbuzz.push("Buzz");
}
else if(count % 5 === 0 && count % 3 = 0){
    fizzbuzz.pop(count);
    fizzbuzz.push("FizzBuzz");
}
count++;
}

