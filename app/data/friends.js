// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Sara",
    photo: "google.com",
    scores: [
      1,
      4,
      3,
      5,
      2,
      5,
      2,
      1,
      4,
      3
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
