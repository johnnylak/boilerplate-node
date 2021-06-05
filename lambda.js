const { ApolloServer } = require('apollo-server-lambda')

const { schema } = require('./graphql/makeSchema')

const server = new ApolloServer({
  schema,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
})

const handler = server.createHandler({
    cors: { origin: '*' }
})

module.exports = {
  server,
  handler
}

