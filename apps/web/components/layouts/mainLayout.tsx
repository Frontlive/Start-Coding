import type { ReactNode } from 'react';
import { Header } from 'organisms/header/header';
import { ApolloProvider } from '@apollo/client';
import { graphClient } from '../../graphql/apolloClient';
import { UserProvider } from '@auth0/nextjs-auth0';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<ApolloProvider client={graphClient}>
			<UserProvider>
				<Header />
				<div className="isolate">{children}</div>
			</UserProvider>
		</ApolloProvider>
	);
};
