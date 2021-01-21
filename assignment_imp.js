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

var result = budgetCalculator(1, 0, 0);
console.log(result);