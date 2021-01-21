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
var result = megaFriend(friend);
console.log(result);