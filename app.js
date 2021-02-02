const editor = require("./editer");

/**
 * @function editer()
 * @parameter URL, value, key1, key2
 */

// example 1
editor("user.json", "김희연", "name");

// example 2
editor("user.json", "wow9896", "contacts", "email");

// example 3
editor("user.json", [1, 2, 3], "experiencedSeasons");
