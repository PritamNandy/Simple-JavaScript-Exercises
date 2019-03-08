// Speed Limit is 70 kmh
// Speed < 75 is OK
// For Every 5 kmh extra speed there will be 1 demerit point
// If point is >= 12 LICENSE SUSPENDED

checkspeed(130);

function checkspeed(input) {
    if(input <= 70) {
        console.log('OK');
    }

    if(input > 70){
        if(Math.floor(input) === 70)
        {
            console.log('OK');
        }
        else {
            let speed = input - 70;
            let point = Math.floor(speed / 5);
            if(point >= 12) {
                console.log('License Suspended');
            }
            else 
                console.log('Point: ' + point);
        }
    }
}