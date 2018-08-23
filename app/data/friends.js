// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Yoda",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Yoda_Attack_of_the_Clones.png/170px-Yoda_Attack_of_the_Clones.png",
    scores: [
      "1",
      "4",
      "3",
      "5",
      "2",
      "5",
      "2",
      "1",
      "4",
      "3"
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
