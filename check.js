if (watch < 0) {
    return "Please Check Your Input Again";
} else {
    watchCost = watch * 50;
    phoneCost = phone * 100;
    laptopCost = laptop * 500;
    totalCost = watchCost + phoneCost + laptopCost;
}
return totalCost;
}