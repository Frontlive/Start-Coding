import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { graphClient } from '../graphql/apolloClient';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={graphClient}>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</ApolloProvider>
	);
}

export default MyApp;
