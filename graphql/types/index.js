const { objectType } = require('@nexus/schema')

const User = objectType({
  name: 'User',

  definition (t) {
    t.id('id')
    t.string('name', { nullable: true })
  }
})

module.exports = {
  User
}