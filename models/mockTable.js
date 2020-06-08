const { createDdbDocClient } = require('../utilities/dynamodbClient')

const dynamodbClient = createDdbDocClient()

const TableName = 'mock-table'

const get = id => dynamodbClient
  .get({
    TableName,
    Key: { id }
  })
  .promise()
  .then(({ Item }) => {
    if(!Item) console.error('Unable to find item by id')
    return Item
  })

const put = Item => dynamodbClient
  .put({
    TableName,
    Item
  })
  .promise()

module.exports = {
  createMockTableModel: () => ({ get, put })
}