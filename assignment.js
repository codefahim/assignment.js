// https://github.com/codefahim/assignment.js


// Problem No One:
// convert kiloMeter to Meter

// we know, 1 kiloMeter = 1000 meter


function kiloMeterToMeter(kiloMeter) {
    var meter = 1000;
    var totalMeter = 0;
    if (kiloMeter < 0) {
        return "Please Check your input again";
    } else {
        totalMeter = meter * kiloMeter;
    }
    return totalMeter;
}
var result = kiloMeterToMeter(12);
console.log(result);

// problem one closed