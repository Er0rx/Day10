function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
            gold: true,
        },
        002: {
            artist: "Kompleksas",
            title: "Haj Naleti STAE",
            release_year: 2009,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP",
            },
            gold: true,
        },
    };
    return myMusic
}

myFunction()[2];
module.exports = myFunction;
