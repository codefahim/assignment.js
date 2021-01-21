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
// var result = kiloMeterToMeter(12);
// console.log(result);

// problem one closed

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

// Problem No Two:
// Budget Calculation

function budgetCalculator(watch, phone, laptop) {
    var watchCost = 0;
    var phoneCost = 0;
    var laptopCost = 0;
    var totalCost = 0;

    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        watchCost = watch * 50;
        phoneCost = phone * 100;
        laptopCost = laptop * 500;
        totalCost = watchCost + phoneCost + laptopCost;
    } else {
        return "Please Check Your Input Again";
    }
    return totalCost;
};

// var result = budgetCalculator(0, 0, 0);
// console.log(result);
// problem two closed

// --------------------------------------------------------------------------------------------