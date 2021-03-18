var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};

function myFunction(key, value) {
    lion[key] = value;
    return lion;
}

myFunction("roar", "roar-roar");
module.exports = myFunction;
