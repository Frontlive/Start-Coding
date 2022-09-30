import { ApolloClient, InMemoryCache } from '@apollo/client';

export const graphClient = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GRAPH_API_URI,
	cache: new InMemoryCache(),
});
