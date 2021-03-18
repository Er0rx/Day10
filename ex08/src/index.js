function getUsername(email) {
    var username = "";
    var mail = {
        "user1@mail.com": "user1",
        "user2@mail.com": "user2",
        "user3@mail.com": "user3",
        "user4@mail.com": "user4",
        "user5@mail.com": "user5",
        "user6@mail.com": "user6"
    };
    username = mail[email];
    return username;
}

getUsername("user1@mail.com");
getUsername("user2@mail.com");
getUsername("user3@mail.com");
getUsername("user4@mail.com");
getUsername("user5@mail.com");
getUsername("user6@mail.com");
getUsername("");

module.exports = getUsername;
