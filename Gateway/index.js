require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema/index');

import resolvers from './src/resolvers/index'
// const UserAPI = require('./datasources/user');

// set up any dataSources our resolvers need
// const dataSources = () => ({
// 	userAPI: new UserAPI()
// });

// Set up Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	// dataSources,
	// context,
	introspection: true,
	playground: true
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 app running at ${url}`);
});
