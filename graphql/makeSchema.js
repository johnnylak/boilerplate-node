const { queryType, makeSchema: _makeSchema } = require('nexus')

const allSchemas = require('./schemas/user')
const allTypes = require('./types')

const Query = queryType({
  definition(t) {
    t.string("healthCheck", {
      type: 'String',
      resolve: (_, args, context) => {
        console.log('Health check complete!')
        return 'GraphQL OK!'
      }
    })
  },
})

const schema = _makeSchema({
  types: [Query, allTypes, allSchemas],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts",
  },
})

module.exports = {
  schema
}
