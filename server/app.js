// ===========================  DEPENDENCIES =========================
// Load modules as object
var express = require("express");       // node express module
var path = require("path");          // path helper functions; working with files & directory paths
// var bodyParser = require("body-parser")    // bodyParser to populate and parse body property of request object

// Create Express app instance
var app = express();


// ===========================  CONSTANTS =========================
// Define Routes load contents and assign to constant
const NODE_PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 8000;
const CLIENT_FOLDER = path.join(__dirname, "/../client");
const ERRMSG_FOLDER = path.join(CLIENT_FOLDER, "/assets/msg")
const IMG_FOLDER = path.join(CLIENT_FOLDER, "/assets/img")


// ===========================  MIDDLEWARES =========================
/*
    Note: __dirname is the absolute path of the application directory.
    Note: if Route Handler '/' defined before the public (CLIENT_FOLDER) folder, 
        root (/) would hit this Handler and server would not look for index.html from public folder.
*/
// Define Routes load contents and assign to constant
app.use(express.static(CLIENT_FOLDER));
app.use(express.static(IMG_FOLDER));
app.use("/libs", express.static(path.join(CLIENT_FOLDER, "/bower_components")));
app.use("/libs", express.static(path.join(__dirname, "/../node_modules")));
// console.log("absolute path of the application directory: %s", __dirname);

/*
// Populates req.body info; Expected content type is application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Default $http content type is application/json; use json as the parser type
app.use(bodyParser.json());
*/


// ===========================  ROUTE HANDLERS =========================
// Define endpoint handler to GET User-Agent & Accept from HTTP request headers
app.get("/agent", function (req, res) {
    console.log("GET User-Agent & Accept from HTTP request headers...");
    var userAgent = req.get("user-agent");
    var accept = req.get("accept");
    var msg = "<h3>User Agent: " + userAgent + "</h3>" + "\n</h3>Accept: " + accept + "</h3>";
    res.status(200);
    res.type("text/html");
    res.send(msg);
});


// ===========================  ERROR HANDLING =========================
/*
    Note: Express 404 responses are not error result and not capture.
*/
// Handles 404 Not Found. Add error-handler middleware 404 function.
app.use(function (req, res) {
    res.status(404).sendFile(path.join(ERRMSG_FOLDER, "/404.html"));
});
// Handles 501 Server Error.
app.use(function (err, req, res, next) {
    res.status(501).sendFile(path.join(ERRMSG_FOLDER, "/501.html"));
});


// ===========================  SERVER / PORT SETUP =========================
// Start server on specific port
app.listen(NODE_PORT, function () {
    console.log("%s \nApplication started at http://localhost:%d", new Date(), NODE_PORT);
});
