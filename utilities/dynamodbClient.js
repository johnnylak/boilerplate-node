// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-configuring-maxsockets.html
const AWS = require('aws-sdk')
const https = require('https')

const agent = new https.Agent({
  maxSockets: 25,
  keepAlive: true,
  rejectUnauthorized: true
})

AWS.config.update({
  httpOptions: {
    agent: agent,
  }
})

// Create DynamoDB document client
const createDdbDocClient = () =>
  new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    region: 'us-east-1'
  })

module.exports = {
  createDdbDocClient
}
