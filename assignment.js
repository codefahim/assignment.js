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

// Problem No Three:
// Hotal Costing




function hotelCost(day) {
    var totalCost = 0;
    var days = day;
    if (days < 0) {
        return "Please Check your input Again";
    } else {
        if (days <= 10) {
            var firstTenDay = days * 100;
            totalCost = firstTenDay;

        } else if (days <= 20) {
            var firstTenDay = 10 * 100;
            var secondTenDay = (days - 10) * 80;
            totalCost = secondTenDay + firstTenDay;
        } else {
            var firstTenDay = 10 * 100;
            var secondTenDay = 10 * 80;
            var unlimited = (days - 20) * 50;
            totalCost = firstTenDay + secondTenDay + unlimited;
        }
    }

    return totalCost;
}
// var result = hotelCost(-5);
// console.log(result);
// problem three closed


// --------------------------------------------------------------------------------------------
// Problem No Four:
// Mega Friend Find



function megaFriend(friend) {
    var count = 0;
    var maxlengthName = [];

    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length > count) {
            count = friend[i].length;
            maxlengthName = friend[i];
        }
    }
    return maxlengthName;
}

var friend = [
    'abdullah al fahim',
    'Jamal Ahmed',
    'Morad hossen', 'Mohammad Tareq'
];
// var result = megaFriend(friend);
// console.log(result);
// problem four closed