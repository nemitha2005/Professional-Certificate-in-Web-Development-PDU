function checkNumber(number) {
    if (number > 0) {
        return 'Positive';
    } else if (number < 0) {
        return 'Negative';
    } else {
        return 'Zero';
    }
}

console.log(checkNumber(10)); 

