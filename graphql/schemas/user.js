const {  queryField } = require('@nexus/schema')

const getUser = queryField('getUser', {
  type: 'User',
  list: true,
  resolve: (_, __, context) => {
    return [{ firstName: 'Johnny', lastName: 'Lakkis'}, {firstName: 'Johnny', lastName: 'Johnny'}, {firstName: 'Johnny', lastName: 'Johnny'}]
  }
})

module.exports = {
  getUser
}