function myFunction(key) {
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };
    delete lion[key];
    return lion;
}

myFunction("roar");
module.exports = myFunction;
