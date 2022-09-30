import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { graphClient } from '../graphql/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={graphClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
