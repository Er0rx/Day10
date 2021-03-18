var myPet = {
    species: "Ker",
    name: "Kerovina",
    legs: 4,
    friends: ["Kerica", "Kercina"],
};

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
