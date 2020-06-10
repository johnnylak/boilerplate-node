// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-configuring-maxsockets.html
const AWS = require('aws-sdk')
const https = require('https')

const isOffline = () => process.env.IS_OFFLINE

const agent = new https.Agent({
  maxSockets: 25,
  keepAlive: true,
  rejectUnauthorized: true
})

const options = isOffline
  ? {
      region: 'us-east-1',
      endpoint: 'http://localhost:8000',
      accessKeyId: 'DEFAULT_ACCESS_KEY', // needed if you don't have aws credentials at all in env
      secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
    } 
  : { region: 'us-east-1', httpOptions: { agent } }


// Create DynamoDB document client
const createDdbDocClient = () =>
  new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    ...options
  })

module.exports = {
  createDdbDocClient
}
