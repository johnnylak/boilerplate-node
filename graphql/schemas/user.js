const { queryField, idArg } = require('@nexus/schema')

const { createMockTableModel } = require('../../models')

const mockTableModel = createMockTableModel()

const getUser = queryField('getUser', {
  type: 'User',
  args: {
    id: idArg({ required: true })
  },
  resolve: (_, { id }) => mockTableModel.get({ id })
})

const getUsers = queryField('getUsers', {
  type: 'User',
  list: true,
  resolve: (_, __, context) => {
    return [
      { firstName: 'Test', lastName: 'Test' },
      { firstName: 'Test', lastName: 'Test' },
      { firstName: 'Test', lastName: 'Test' },
    ];
  },
});

module.exports = {
  getUser,
  getUsers
};
