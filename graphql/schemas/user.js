const { queryField } = require('@nexus/schema');

const getUser = queryField('getUser', {
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
};
