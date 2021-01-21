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
var result = hotelCost(-5);
console.log(result);