// In javascript Falsy Values are - 0, null, undefined, '', false, NaN

const array = [0, 1, 2, NaN, '', undefined, 9, 8, NaN, null, false, 12, 24, 45];

console.log('Truthy Values: ', countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for(let value of array)
    {
        if(value) // it will eliminate all the falsy values. For condition it will only accept the truthy values which are numbers, string, character, boolean true.
            count++; 
    }
    return count;
}