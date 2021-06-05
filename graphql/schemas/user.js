const { queryField, list } = require("nexus");

const getUser = queryField("getUser", {
  type: list("User"),
  resolve: (_, __, context) => {
    return [
      { firstName: "Test", lastName: "Test" },
      { firstName: "Test", lastName: "Test" }
    ];
  },
});

module.exports = {
  getUser
};
