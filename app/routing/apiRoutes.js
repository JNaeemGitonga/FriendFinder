// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
        friendsData.push(req.body);

        var topFriendArray = [];

        for (i = 0; i < friendsData.length - 1; i++) {
            var counter = 0;
            for (j = 0; j < 10; j++) {
                counter += Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
            }
            topFriendArray.push(counter);
        }

        function indexOfMin(arr) {
            var min = arr[0];
            var minIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    minIndex = i;
                    min = arr[i];
                }
            }

            return minIndex;
        }

        var topFriendIndex = indexOfMin(topFriendArray)

        topFriend = {};
        topFriend.name = friendsData[topFriendIndex].name;
        topFriend.photo = friendsData[topFriendIndex].photo;

        console.log(topFriend)
        res.json(topFriend);
    });
};
