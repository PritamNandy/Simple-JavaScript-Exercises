// Will show the sum of 3 & 5 multiplies number
// limit is 10 so multiplies of 3: 3, 6, 9
// multiplies of 5: 5, 10
 
console.log(sum(10))

function sum(limit) {
    let sum = 0;
    for(let i=1; i<=limit; i++) {
        if(i%3 === 0 && i%5 === 0)
            sum+= 2*i;
        if(i%3 === 0 || i%5 === 0)
            sum += i;
    }
    return sum;
}


