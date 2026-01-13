function whosPaying(names){
    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPersonPosition];
    
    return randomPerson +" is going to buy lunch today!";
}