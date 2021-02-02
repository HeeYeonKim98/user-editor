const fs = require("fs");

const editor = (URL, value, key1, key2 = null) => {
    const userData = JSON.parse(fs.readFileSync(URL, "utf-8"));

    if (key2 == null) userData[key1] = value;
    else userData[key1][key2] = value;

    fs.writeFileSync(URL, JSON.stringify(userData));
};

module.exports = editor;
