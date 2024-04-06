const Query = require("../package/main.js");

Query({
  name: "Test",
  platform: "xbx",
}).then(function (query) {
  console.log(query);
});

// that returns all the data for xbox with the name Test