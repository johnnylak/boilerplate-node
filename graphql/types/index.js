const { objectType } = require('@nexus/schema')

const User = objectType({
  name: 'User',

  definition (t) {
    t.string('firstName')
    t.string('lastName')
  }
})

module.exports = {
  User
}