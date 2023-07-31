/** @format */

const { projects, clients } = require("../sampleData");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");

const ClientType = new GraphQLObjectType({
  name: "Clients",
  fields: () => ({
    id: { typeof: GraphQLID },
    name: { typeof: GraphQLString },
    email: { typeof: GraphQLString },
    phone: { typeof: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      typeof: ClientType,
      args: { id: { typeof: GraphQLID } },
      resolve(parent, arg) {
        return clients.find((client) => client.id === arg.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
