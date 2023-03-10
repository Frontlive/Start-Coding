import type { ReactNode } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { Card, Heading, Link } from 'ui';

type ProtectedComponentProps = {
	info?: string;
	children: ReactNode;
};

export const ProtectedComponent = ({
	info = 'Ta opcja dostępna jest tylko dla zalogowanych użytkowników.',
	children,
}: ProtectedComponentProps) => {
	const { isLoading, user } = useUser();

	if (!isLoading && !user) {
		return (
			<Card tag="div">
				<div className="flex flex-col justify-center items-center h-full">
					<Heading tag="h3" size="large">
						{info}
					</Heading>
					<Link href="/" variant="primary">
						Zaloguj się
					</Link>
				</div>
			</Card>
		);
	}

	if (isLoading || !user) return <div>Loading ...</div>;

	return <>{children}</>;
};
