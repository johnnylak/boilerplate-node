const { objectType } = require('nexus')

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