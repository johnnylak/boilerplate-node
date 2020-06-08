const { createDdbDocClient } = require('../utilities/dynamodbClient')

const dynamodbClient = createDdbDocClient()

const get = id => dynamodbClient
  .get({
    TableName: 'mock-table',
    Key: { id }
  })
  .promise()
  .then(({ Item }) => {
    if(!Item) console.error('Unable to find item by id')
    return Item
  })