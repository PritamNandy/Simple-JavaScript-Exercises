// A simple program to show ODD and EVEN type of a number
// If a number is divisible by 2 it is EVEN type, if a number is divisible by 3 ODD type
// 0 is a even number

showType(130);

function showType(input) {
    for(let i = 0; i <= input; i++) {
        if(i % 2 === 0 || i === 0)
            console.log(i,'Even');
        else
            console.log(i,'Odd');
    }
}