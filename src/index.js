//require() function includes the module passed as a parameter
//const {} is ES6 destructing assignment: shortens syntax for assignments
const { GraphQLServer } = require('graphql-yoga')

//1

//we use the ` (back-tick) character not ' (single quotation) for a template litteral
//template litterals 
const typeDefs = `
type Query {
    info: String!
}
`

//2
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`
    }
}

//3

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost4000`))