var util = require("util");// no "./" becuase it's a core module which doesn't reside in our directry

var name = "Yvon";
var greeting = util.format("Hello, %s", name);
util.log(greeting); // util.log add a time stamp to our log