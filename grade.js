// grade of student

// D = 70
// C = 71-80
// B = 81-90
// A = 91+

const marks = [80, 95, 86];

console.log('Student grade is', grade(marks));

function grade(marks) {
    let sum = 0;
    for(let mark of marks)
        sum += mark;
    let avg = sum/marks.length;
    if(avg>90)
        return 'A';
    else if(avg>80)
        return 'B';
    else if(avg>70)
        return 'C';
    else if(avg === 70)
        return 'D';
    else
        return 'F';
}


