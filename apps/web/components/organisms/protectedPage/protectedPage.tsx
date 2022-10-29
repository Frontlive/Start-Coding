import type { ReactNode } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type ProtectedPageProps = {
	children: ReactNode;
};

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
	const { isLoading, user } = useUser();
	const router = useRouter();
	useEffect(() => {
		if (!isLoading && !user) {
			router.push('/api/auth/login');
		}
	}, [isLoading, router, user]);

	if (isLoading) return <div>Loading ...</div>;

	return <>{children}</>;
};
